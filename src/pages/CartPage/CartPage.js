import React, { Component } from 'react';

class CartPage extends Component {
    render() {
        return (
            <div>
                <main className="mainContent">
                    <section id="pageContent">
                        <div className="container">
                            <div id="shopify-section-vela-template-cart" className="shopify-section"><div className="cartContainer">
                                <h1 className="cartTitle">Shopping cart</h1>
                                <div className="cartContent">
                                    <div className="cartTable">
                                        <div className="row noGutter cartHeaderLabels">
                                            <div className="text-center col-xs-12 col-sm-2">Image</div>
                                            <div className="text-center col-xs-12 col-sm-3">Product</div>
                                            <div className="text-center col-xs-12 col-sm-2">Price</div>
                                            <div className="text-center col-xs-12 col-sm-2">Quantity</div>
                                            <div className="text-right col-xs-12 col-sm-2">Total</div>
                                            <div className="text-center col-xs-12 col-sm-1">&nbsp;</div>
                                        </div>
                                        <div className="cartItemWrap">
                                            <div className="flexRow noGutter">
                                                <div className="productImage col-xs-12 col-sm-2" data-label="Product">
                                                    <a href="/products/sacrificial-chair-design-8?variant=158484791312" className="cartImage">
                                                        <img src="//cdn.shopify.com/s/files/1/1573/5553/products/11_120x.jpg?v=1509980321" alt="Sacrificial Chair Design"/>
                                                    </a>
                                                </div>
                                                <div className="productInfo col-xs-12 col-sm-3">
                                                    <a href="/products/sacrificial-chair-design-8?variant=158484791312" className="productName">
                                                        Sacrificial Chair Design
                                                        </a>
                                                    <p>velatheme</p>
                                                </div>
                                                <div className="text-center col-xs-12 col-sm-2" data-label="Price">
                                                    <span className="priceProduct">
                                                        <span className="money">$170.00</span>
                                                    </span>
                                                </div>
                                                <div className="text-center col-xs-12 col-sm-2" data-label="Quantity">
                                                    <div className="velaJsQty">
                                                        <button type="button" className="velaQtyAdjust velaQtyAdjustMinus" data-id="" data-qty="0">
                                                            <span className="txtFallback">−</span>
                                                        </button>
                                                        <input type="text" className="velaQtyNum"/>
                                                        <button type="button" className="velaQtyAdjust velaQtyAdjustPlus" data-id="" data-qty="11">
                                                            <span className="txtFallback">+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="text-right col-xs-12 col-sm-2" data-label="Total">
                                                    <span className="h3 cartSubtotal priceProduct">
                                                        <span className="money">$170.00</span>
                                                    </span>
                                                </div>
                                                <div className="text-center col-xs-12 col-sm-1">
                                                    <a href="/cart/change?line=1&amp;quantity=0" className="cartRemove" title="Remove">
                                                        <i className="fa fa-trash"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="functionCart row noGutter">
                                        <div className="col-xs-12 col-sm-6 col-md-7">
                                            <label>Special instructions for seller</label>
                                            <textarea name="note" className="form-control" id="CartSpecialInstructions" rows="3"></textarea>
                                        </div>

                                        <div className="text-right col-xs-12 col-sm-6 col-md-5">
                                            <p>
                                                <span className="cartSubtotalTitle">Subtotal</span>
                                                <span className="h3 cartSubtotal"><span className="money">$170.00</span></span>
                                            </p>
                                            <p><em>Shipping &amp; taxes calculated at checkout</em></p>
                                            <input type="submit" name="update" className="btn btnVelaOne btnUpdateCart" value="Update Cart"/>
                                            <input type="submit" name="checkout" className="btn btnVelaTwo" value="Check Out"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                    
            </main>
        </div>
        );   
    }
}

export default CartPage;
