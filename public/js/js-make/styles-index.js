window.money = '<span class="money">${{amount}}</span>';
window.money_format = '${{amount}} USD';
window.shop_currency = 'USD';
window.loading_url = '../cdn.shopify.com/s/files/1/1573/5553/t/5/assets/loading9d62.gif?15578626468898853690';
window.file_url = 'http://cdn.shopify.com/s/files/1/1573/5553/files/?15578626468898853690';
window.asset_url = 'http://cdn.shopify.com/s/files/1/1573/5553/t/5/assets/?15578626468898853690';
window.ajaxcart_type = 'modal';
window.swatch_enable = false;
window.sidebar_multichoise = true;
window.float_header = true;
window.review = true;
window.countdown_format = '<ul class="list-unstyle list-inline"><li><span class="number">%D</span><span>days</span></li><li><span class="number"> %H</span><span>Hours</span></li><li><span class="number">%M</span><span>Mins</span></li><li><span class="number">%S</span><span>Secs</span></li></ul>';

var Shopify = Shopify || {};
Shopify.shop = "vela-kazan.myshopify.com";
Shopify.theme = {"name":"outstock-home1","id":210468880,"theme_store_id":null,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};

(function() {
    function asyncLoad() {
      var urls = ["\/\/productreviews.shopifycdn.com\/assets\/v4\/spr.js?shop=vela-kazan.myshopify.com","index.html\/\/cdn.shopify.com\/s\/files\/1\/1573\/5553\/t\/5\/assets\/ginit.js?2851527397481196836\u0026shop=vela-kazan.myshopify.com","https:\/\/cdn.shopify.com\/s\/files\/1\/1573\/5553\/t\/5\/assets\/doubly.js?4115295593664456006\u0026shop=vela-kazan.myshopify.com"];
      for (var i = 0; i < urls.length; i++) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = urls[i];
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    };
    if(window.attachEvent) {
      window.attachEvent('onload', asyncLoad);
    } else {
      window.addEventListener('load', asyncLoad, false);
    }
  })();

window.ShopifyPaypalV4VisibilityTracking = true;

window.Shopify = window.Shopify || {};
window.Shopify.Checkout = window.Shopify.Checkout || {};
window.Shopify.Checkout.apiHost = "vela-kazan.myshopify.com";
window.ShopifyPay = window.ShopifyPay || {};
window.ShopifyPay.acceleratedFlowIncontext = false;
window.ShopifyPay.apiHost = "pay.shopify.com";
window.ShopifyPay.apiToken = "MFJzTXRVUFRZUkovWHk5MFZqd1EySXR5T1hzN29PU09DbUh5c1RHTlVaaU9kUWRTOHMyZFhVOEdjaHBxTTRxZi0tL0VOeXorVEFaakVaTUM5MzdRNG9jZz09--54dcaff4de30a76eb4f3e8b1d9614fc40ed01aeb";
window.ShopifyPay.requestHost = "vela-kazan.myshopify.com"
window.ShopifyPay.sheetStyleSheetUrl = "\/\/cdn.shopify.com\/s\/assets\/shared\/sheet\/main-c150bd783aa9b2c6b0c41ded3880c45a0848a9914354d4222628be6c924200a3.css";

window.ShopifyAnalytics = window.ShopifyAnalytics || {};
window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
window.ShopifyAnalytics.meta.currency = 'USD';
var meta = {"page":{"pageType":"home"}};
for (var attr in meta) {
window.ShopifyAnalytics.meta[attr] = meta[attr];
}
window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
  
}

(function () {
    var customDocumentWrite = function(content) {
      var jquery = null;
  
      if (window.jQuery) {
        jquery = window.jQuery;
      } else if (window.Checkout && window.Checkout.$) {
        jquery = window.Checkout.$;
      }
  
      if (jquery) {
        jquery('body').append(content);
      }
    };
  
    var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
    if (trekkie.integrations) {
      return;
    }
    trekkie.methods = [
      'identify',
      'page',
      'ready',
      'track',
      'trackForm',
      'trackLink'
    ];
    trekkie.factory = function(method) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        trekkie.push(args);
        return trekkie;
      };
    };
    for (var i = 0; i < trekkie.methods.length; i++) {
      var key = trekkie.methods[i];
      trekkie[key] = trekkie.factory(key);
    }
    trekkie.load = function(config) {
      trekkie.config = config;
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.onerror = function(e) {
        (new Image()).src = 'http://v.shopify.com/internal_errors/track?error=trekkie_load';
      };
      script.async = true;
      script.src = '../cdn.shopify.com/s/javascripts/tricorder/trekkie.storefront.min97e4.js?v=2017.09.05.1';
      var first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(script, first);
    };
    trekkie.load(
      {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":15735553,"isMerchantRequest":null,"themeId":210468880,"themeCityHash":3618525672246962548}},"Performance":{"navigationTimingApiMeasurementsEnabled":true,"navigationTimingApiMeasurementsSampleRate":1.0},"Session Attribution":{}}
    );
  
    var loaded = false;
    trekkie.ready(function() {
      if (loaded) return;
      loaded = true;
  
      window.ShopifyAnalytics.lib = window.trekkie;
      
  
      var originalDocumentWrite = document.write;
      document.write = customDocumentWrite;
      try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
      document.write = originalDocumentWrite;
  
      
          window.ShopifyAnalytics.lib.page(
            null,
            {"pageType":"home"}
          );
        
      
    });
  
    
        var eventsListenerScript = document.createElement('script');
        eventsListenerScript.async = true;
        eventsListenerScript.src = "../cdn.shopify.com/s/assets/shop_events_listener-f2c5800305098f0ebebdfa7d980c9abf56514c46d5305e97a7c476f7c9116163.js";
        document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
      
  })()