if ((typeof ShopifyAPI) === 'undefined') { ShopifyAPI = {}; }
function attributeToString(attribute) {
    if ((typeof attribute) !== 'string') {
        attribute += '';
        if (attribute === 'undefined') {
            attribute = '';
        }
    }
    return jQuery.trim(attribute);
};
ShopifyAPI.onCartUpdate = function(cart) {
    // alert('There are now ' + cart.item_count + ' items in the cart.');
};
ShopifyAPI.updateCartNote = function(note, callback) {
    var params = {
        type: 'POST',
        url: '/cart/update.js',
        data: 'note=' + attributeToString(note),
        dataType: 'json',
        success: function(cart) {
            if ((typeof callback) === 'function') {
                callback(cart);
            }
            else {
                ShopifyAPI.onCartUpdate(cart);
            }
        },
        error: function(XMLHttpRequest, textStatus) {
            ShopifyAPI.onError(XMLHttpRequest, textStatus);
        }
    };
    jQuery.ajax(params);
};
ShopifyAPI.onError = function(XMLHttpRequest, textStatus) {
    var data = eval('(' + XMLHttpRequest.responseText + ')');
    if (!!data.message) {
        alert(data.message + '(' + data.status  + '): ' + data.description);
    }
};
ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
    var params = {
        type: 'POST',
        url: '/cart/add.js',
        data: jQuery(form).serialize(),
        dataType: 'json',
        success: function(line_item) {
            if ((typeof callback) === 'function') {
                callback(line_item, form);
            }
            else {
                ShopifyAPI.onItemAdded(line_item, form);
            }
        },
        error: function(XMLHttpRequest, textStatus) {
            if ((typeof errorCallback) === 'function') {
                errorCallback(XMLHttpRequest, textStatus);
            }
            else {
                ShopifyAPI.onError(XMLHttpRequest, textStatus);
            }
        }
    };
    jQuery.ajax(params);
};
ShopifyAPI.getCart = function(callback) {
    jQuery.getJSON('/cart.js', function (cart, textStatus) {
        if ((typeof callback) === 'function') {
            callback(cart);
        }
        else {
            ShopifyAPI.onCartUpdate(cart);
        }
    });
};
ShopifyAPI.changeItem = function(line, quantity, callback) {
    var params = {
        type: 'POST',
        url: '/cart/change.js',
        data: 'quantity=' + quantity + '&line=' + line,
        dataType: 'json',
        success: function(cart) {
            if ((typeof callback) === 'function') {
                callback(cart);
            }
            else {
                ShopifyAPI.onCartUpdate(cart);
            }
        },
        error: function(XMLHttpRequest, textStatus) {
            ShopifyAPI.onError(XMLHttpRequest, textStatus);
        }
    };
    jQuery.ajax(params);
};
/*============================================================================
  Ajax Shopify Add To Cart
==============================================================================*/
var ajaxCart = (function(module, $) {
    'use strict';
    var init, loadCart;
    var settings, isUpdating, $body;
    var $formContainer, $addToCart, $cartCountSelector, $cartCostSelector, $cartContainer, $drawerContainer;
    var updateCountPrice, formOverride, itemAddedCallback, itemErrorCallback, cartUpdateCallback, buildCart, cartCallback, adjustCart, adjustCartCallback, createQtySelectors, qtySelectors, validateQty;
    init = function (options) {
        settings = {
            formSelector       : 'form[action^="/cart/add"]',
            cartContainer      : '#cartContainer',
            addToCartSelector  : 'input[type="submit"]',
            cartCountSelector  : null,
            cartCostSelector   : null,
            moneyFormat        : '$',
            disableAjaxCart    : false,
            enableQtySelectors : true
        };
        $.extend(settings, options);
        $formContainer     = $(settings.formSelector);
        $cartContainer     = $(settings.cartContainer);
        $addToCart         = $formContainer.find(settings.addToCartSelector);
        $cartCountSelector = $(settings.cartCountSelector);
        $cartCostSelector  = $(settings.cartCostSelector);
        $body = $('body');
        isUpdating = false;
        if (settings.enableQtySelectors) {
            qtySelectors();
        }
        if (!settings.disableAjaxCart && $addToCart.length) {
            formOverride();
        }
        adjustCart();
    };
    loadCart = function () {
        $body.addClass('ajaxcartIsLoading');
        ShopifyAPI.getCart(cartUpdateCallback);
    };
    updateCountPrice = function (cart) {
        if ($cartCountSelector) {
            $cartCountSelector.html(cart.item_count).removeClass('hidden-count');
            if (cart.item_count === 0) {
                $cartCountSelector.addClass('hidden-count');
            }
        }
        if ($cartCostSelector) {
            $cartCostSelector.html(Shopify.formatMoney(cart.total_price, settings.moneyFormat));
        }
    };
    formOverride = function () {
        if (window.ajaxcart_type != 'page') {
            $formContainer.on('submit', function(evt) {
                evt.preventDefault();
                $addToCart.removeClass('is-added').addClass('is-adding');
                $('.qtyError').remove();
                ShopifyAPI.addItemFromForm(evt.target, itemAddedCallback, itemErrorCallback);
            });
        }
    };
    itemAddedCallback = function (product) {
        $addToCart.removeClass('is-adding').addClass('is-added');
        ShopifyAPI.getCart(cartUpdateCallback);
    };
    itemErrorCallback = function (XMLHttpRequest, textStatus) {
        var data = eval('(' + XMLHttpRequest.responseText + ')');
        $addToCart.removeClass('is-adding is-added');
        if (!!data.message) {
            if (data.status == 422) {
                $formContainer.after('<div class="alert alert-danger qtyError">'+ data.description +'</div>')
            }
        }
    };
    cartUpdateCallback = function (cart) {
        updateCountPrice(cart);
        buildCart(cart);
    };
    buildCart = function (cart) {
        $cartContainer.empty();
        if (cart.item_count === 0) {
            $cartContainer
            .append('<p>' + "Your cart is currently empty." + '</p>');
            cartCallback(cart);
            return;
        }
        var items = [],
            item = {},
            data = {},
            source = $("#CartTemplate").html(),
            template = Handlebars.compile(source);
        $.each(cart.items, function(index, cartItem) {
            if (cartItem.image != null){
                var prodImg = cartItem.image.replace(/(\.[^.]*)$/, "_small$1").replace('http:', '');
            } else {
                var prodImg = "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif";
            }
            item = {
                id: cartItem.variant_id,
                line: index + 1, // Shopify uses a 1+ index in the API
                url: cartItem.url,
                img: prodImg,
                name: cartItem.product_title,
                variation: cartItem.variant_title,
                properties: cartItem.properties,
                itemAdd: cartItem.quantity + 1,
                itemMinus: cartItem.quantity - 1,
                itemQty: cartItem.quantity,
                price: Shopify.formatMoney(cartItem.price, settings.moneyFormat),
                vendor: cartItem.vendor
            };
            items.push(item);
        });
        data = {
            items: items,
            note: cart.note,
            totalPrice: Shopify.formatMoney(cart.total_price, settings.moneyFormat)
        }
        $cartContainer.append(template(data));
        cartCallback(cart);
    };
    cartCallback = function(cart) {
        $body.removeClass('drawerIsLoading');
        $body.trigger('ajaxCart.afterCartLoad', cart);
    };
    adjustCart = function () {
        $body.on('click', '.qtyAdjust', function() {
            var $el = $(this),
                line = $el.data('line'),
                $qtySelector = $el.siblings('.qtyNum'),
                qty = parseInt($qtySelector.val().replace(/\D/g, ''));
            var qty = validateQty(qty);
            if ($el.hasClass('qtyPlus')) {
                qty += 1;
            } else {
                qty -= 1;
                if (qty <= 0) qty = 0;
            }
            if (line) {
                updateQuantity(line, qty);
            } else {
                $qtySelector.val(qty);
            }
        });
        $body.on('change', '.qtyNum', function() {
            var $el = $(this),
                line = $el.data('line'),
                qty = parseInt($el.val().replace(/\D/g, ''));
            var qty = validateQty(qty);
            if (line) {
                updateQuantity(line, qty);
            }
        });
        $body.on('submit', 'form.ajaxcart', function(evt) {
            if (isUpdating) {
                evt.preventDefault();
            }
        });
        $body.on('focus', '.qtyAdjust', function() {
            var $el = $(this);
            setTimeout(function() {
                $el.select();
            }, 50);
        });
      	$body.on('click', '.cartRemove', function() {
			var $el = $(this),
                line = $el.data('line'),
                qty = 0;
          	if (line) {
                updateQuantity(line, qty);
            }
        });
        function updateQuantity(line, qty) {
            isUpdating = true;
            var $row = $('.ajaxcartRow[data-line="' + line + '"]').addClass('is-loading');
            if (qty === 0) {
                $row.parent().addClass('is-removed');
            }
            setTimeout(function() {
                ShopifyAPI.changeItem(line, qty, adjustCartCallback);
            }, 250);
        }
        $body.on('change', 'textarea[name="note"]', function() {
            var newNote = $(this).val();
            ShopifyAPI.updateCartNote(newNote, function(cart) {});
        });
    };
    adjustCartCallback = function (cart) {
        isUpdating = false;
        updateCountPrice(cart);
        setTimeout(function() {
            ShopifyAPI.getCart(buildCart);
        }, 150)
    };
    createQtySelectors = function() {
        if ($('input[type="number"]', $cartContainer).length) {
            $('input[type="number"]', $cartContainer).each(function() {
                var $el = $(this),
                    currentQty = $el.val();
                var itemAdd = currentQty + 1,
                    itemMinus = currentQty - 1,
                    itemQty = currentQty;
                var source   = $("#velaAjaxQty").html(),
                template = Handlebars.compile(source),
                data = {
                    id: $el.data('id'),
                    itemQty: itemQty,
                    itemAdd: itemAdd,
                    itemMinus: itemMinus
                };
                $el.after(template(data)).remove();
            });
        }
    };
    qtySelectors = function() {
        var numInputs = $('input[type="number"]');
        if (numInputs.length) {
            numInputs.each(function() {
                var $el = $(this),
                    currentQty = $el.val(),
                    inputName = $el.attr('name'),
                    inputId = $el.attr('id');
                var itemAdd = currentQty + 1,
                    itemMinus = currentQty - 1,
                    itemQty = currentQty;
                var source   = $("#velaJsQty").html(),
                    template = Handlebars.compile(source),
                    data = {
                        id: $el.data('id'),
                        itemQty: itemQty,
                        itemAdd: itemAdd,
                        itemMinus: itemMinus,
                        inputName: inputName,
                        inputId: inputId
                    };
                $el.after(template(data)).remove();
            });
            $('.velaQtyAdjust').on('click', function() {
                var $el = $(this),
                    id = $el.data('id'),
                    $qtySelector = $el.siblings('.velaQtyNum'),
                    qty = parseInt($qtySelector.val().replace(/\D/g, ''));
                var qty = validateQty(qty);
                if ($el.hasClass('velaQtyAdjustPlus')) {
                    qty += 1;
                } else {
                    qty -= 1;
                    if (qty <= 1) qty = 1;
                }
                $qtySelector.val(qty);
            });
        }
    };
    validateQty = function (qty) {
        if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {

        } else {
            qty = 1;
        }
        return qty;
    };
    module = {
        init: init,
        load: loadCart
    };
    return module;
}(ajaxCart || {}, jQuery));
$(document).ready(function() {
	ajaxCart.init({
        formSelector: '.formAddToCart',
        cartContainer: '#cartContainer',
        addToCartSelector: '.btnAddToCart',
        cartCountSelector: '#CartCount',
        cartCostSelector: '#CartCost',
        moneyFormat: window.money
    });
});