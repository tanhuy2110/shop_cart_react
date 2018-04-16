import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header id="velaHeader" className="velaHeader">
                    <section className="headerWrap">
                        <div id="velaHeaderMain">
                            <div className="container">
                                <div className="headerContent flexRow velaFlexRow">
                                    <div className="velaHeaderLeft  col-xs-12 col-sm-12 col-md-2">
                                        <h1 className="velaLogo">
                                            <a href="/" className="velaLogoLink">
                                                <img alt="" className="img-responsive" src="/images/logo2756.png" />
                                            </a>
                                        </h1>
                                    </div>
                                    <div className="velaHeaderCenter col-xs-2 col-sm-2 col-md-7">
                                        <div className="menuBtnMobile pull-left hidden-md hidden-lg">
                                            <div id="btnMenuMobile" className="btnMenuMobile">
                                                <span className="menu-item"></span>
                                                <span className="menu-item"></span>
                                                <span className="menu-item"></span>
                                                <span className="menu-item"></span>
                                            </div>
                                        </div>
                                        <div id="velaMegamenu" className="velaMegamenu hidden-xs hidden-sm">
                                            <nav className="menuContainer">
                                                <ul className="nav hidden-xs hidden-sm">
                                                    <li className="hasMenuDropdown active">
                                                        <a href="index.html" title="">Home</a>
                                                        <ul className="menuDropdown">
                                                            <li className="">
                                                                <a title="">Home 1</a>
                                                            </li>
                                                            <li className="">
                                                                <a title="">Home 2</a>
                                                            </li>
                                                            <li className="">
                                                                <a title="">Home 3</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="hasMenuDropdown hasMegaMenu">
                                                        <a href="collections/all.html" title="">Shop</a>
                                                        <div className="menuDropdown megaMenu" >
                                                            <div className="menuGroup row">
                                                                <div className="col-sm-4">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-6">
                                                                            <ul className="velaMenuLinks">
                                                                                <li className="menuTitle">
                                                                                    <a href="collections.html" title="">Catalog</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/furniture.html" title="">Furniture</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/decor-art.html" title="">Decor Art</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/illumination.html" title="">Illumination</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/kitchen-things.html" title="">Kitchen Things</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/best-sellter.html" title="">Best Sellter</a>
                                                                                </li>

                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-6">
                                                                            <ul className="velaMenuLinks">
                                                                                <li className="menuTitle">
                                                                                    <a href="collections/best-sellter.html" title="">Shop pages</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/new-products.html" title="">Left Sidebar</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/best-sellter.html" title="">Right Sidebar</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/all.html" title="">Full Width</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/furniture.html" title="">Collection List</a>
                                                                                </li>
                                                                                <li className="">
                                                                                    <a href="collections/all.html" title="">Collection Grid</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="velaMenuProducts">
                                                                        <div className="menuTitle"><span>New products</span></div>
                                                                        <div className="listProduct">
                                                                            <div className="blockProMenu media">
                                                                                <div className="proImage proImageMenu pull-left">
                                                                                    <a className="proImageLink" href="products/sacrificial-chair-design-4.html" title="">
                                                                                        <img className="img-responsive" src="/images/5_smalld5e4.jpg?v=1509980327" alt="Sacrificial Chair Design" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="proMeta proMetaMenu media-body">
                                                                                    <h5 className="proName">
                                                                                        <a href="products/sacrificial-chair-design-4.html" title="">Sacrificial Chair Design</a>
                                                                                    </h5>
                                                                                    <div className="boxProPrice">

                                                                                        <span className="curPrice proPrice"><span className="money">$145.00</span></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="blockProMenu media">
                                                                                <div className="proImage proImageMenu pull-left">
                                                                                    <a className="proImageLink" href="products/sacrificial-chair-design-1.html" title="">
                                                                                        <img className="img-responsive" src="/images/2_small2733.jpg" alt="Sacrificial Chair Design" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="proMeta proMetaMenu media-body">
                                                                                    <h5 className="proName">
                                                                                        <a href="products/sacrificial-chair-design-1.html" title="">Sacrificial Chair Design</a>
                                                                                    </h5>
                                                                                    <div className="boxProPrice">
                                                                                        <span className="curPrice proPrice"><span className="money">$132.00</span></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-5">
                                                                    <div className="velaMenuHtml">

                                                                        <div className="menuTitle"><span>Custom html</span></div>

                                                                        <div className="htmlContent">
                                                                            <p><img src="/images/twobanner_image27cbb.jpg?8517695587030211772" alt="" /></p>
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="">
                                                        <a href="blogs/news.html" title="">Blog</a>
                                                    </li>
                                                    <li className="hasMenuDropdown hasMegaMenu">
                                                        <a href="collections.html" title="">Collections</a>
                                                        <div className="menuDropdown megaMenu" >
                                                            <div className="menuGroup row">
                                                                <div className="col-sm-12">
                                                                    <div className="velaMenuListCollection">
                                                                        <div className="menuTitle"><span>List collection</span></div>
                                                                        <div className="velaFlexRow flexRow">
                                                                            <div className="coll-item collImage-width" >
                                                                                <div className="collImage">
                                                                                    <a href="collections/decor-art.html">
                                                                                        <img className="img-responsive" alt="Decor Art" src="images/184a21.jpg" />
                                                                                    </a>
                                                                                </div>
                                                                                <h5 className="collTitle"><a href="collections/decor-art.html" title="Decor Art"> Decor Art</a></h5>
                                                                            </div>
                                                                            <div className="coll-item collImage-width">
                                                                                <div className="collImage">
                                                                                    <a href="collections/furniture.html">
                                                                                        <img className="img-responsive" alt="Furniture" src="images/70d83.jpg" />
                                                                                    </a>
                                                                                </div>
                                                                                <h5 className="collTitle"><a href="collections/furniture.html" title="Furniture"> Furniture</a></h5>
                                                                            </div>
                                                                            <div className="coll-item collImage-width">
                                                                                <div className="collImage">
                                                                                    <a href="collections/illumination.html">
                                                                                        <img className="img-responsive" alt="Illumination" src="images/125486.jpg" />
                                                                                    </a>
                                                                                </div>
                                                                                <h5 className="collTitle"><a href="collections/illumination.html" title="Illumination"> Illumination</a></h5>
                                                                            </div>
                                                                            <div className="coll-item collImage-width" >
                                                                                <div className="collImage">
                                                                                    <a href="collections/furniture.html">
                                                                                        <img className="img-responsive" alt="Furniture" src="images/70d83.jpg" />
                                                                                    </a>
                                                                                </div>
                                                                                <h5 className="collTitle"><a href="collections/furniture.html" title="Furniture"> Furniture</a></h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="">
                                                        <a href="pages/contact-us.html" title="">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="velaHeaderRight col-xs-10 col-sm-10 col-md-3">
                                        <a className="velaSearchIcon" href="#velaSearchTop" data-toggle="collapse" title="Search"><i className="ion ion-ios-search-strong"></i>Search</a>
                                        <div className="velaCartTop">
                                            <a href="cart.html" className="jsDrawerOpenRight">
                                                <span className="icon ion-bag"></span>
                                                <span className="cartitle"> Cart</span>
                                                <span id="CartCount">( 0 )</span>
                                            </a>
                                        </div>
                                        <a className="velaIconTopLinks" href="#velaTopLinks" data-toggle="collapse" title="Search">
                                            <span className="icon ion-navicon"></span>
                                        </a>
                                        <div id="velaTopLinks" className="velaTopLinks collapse">
                                            <ul className="list-unstyled">
                                                <li><a href="/register" id="customer_register_link">Register</a></li>
                                                <li><a href="/login" id="customer_login_link">Login</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </header>
                <a className="searchClose collapsed" href="#velaSearchTop" data-toggle="collapse"><i className="ion ion-android-close"></i></a>
                <div id="velaSearchTop" className="collapse">
                    <div className="container text-center">
                        <a className="btnClose" href="#velaSearchTop" data-toggle="collapse"><i className="ion ion-android-close"></i></a>
                        <h3 className="title">Search</h3>
                        <form id="velaSearchbox" className="formSearch" action="https://vela-kazan.myshopify.com/search" method="get">
                            <input type="hidden" name="type" value="product" />
                            <input className="velaSearch form-control" type="search" name="q" value="" placeholder="Search our store" />
                            <button id="velaSearchButton" className="btnVelaSearch" type="submit" >
                                <i className="ion ion-ios-search"></i>
                                <span className="btnSearchText">Search</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div id="velaMenuMobile" className="menuMobileContainer hidden-md hidden-lg">
                    <div className="memoHeader">
                        <span>Menu</span>
                        <div className="close btnMenuClose"><span>&times;</span></div>
                    </div>
                    <ul className="nav memoNav">
                        <li className="hasMemoDropdown active">
                            <a href="index.html" title="">Home</a>
                            <span className="memoBtnDropdown collapsed" data-toggle="collapse" data-target="#memoDropdown11"><i className="fa fa-angle-down"></i></span>
                            <ul id="memoDropdown11" className="memoDropdown collapse">
                                <li className="">
                                    <a href="" title="">Home 1</a>
                                </li>
                                <li className="">
                                    <a href="" title="">Home 2</a>
                                </li>
                                <li className="">
                                    <a href="" title="">Home 3</a>
                                </li>
                                <li className="">
                                    <a href="" title="">Home 4</a>
                                </li>
                                <li className="">
                                    <a href="" title="">Home 5</a>
                                </li>
                                <li className="">
                                    <a href="" title="">Home 6</a>
                                </li>
                            </ul>
                        </li>
                        <li className="hasMemoDropdown">
                            <a href="collections/all.html" title="">Shop</a>
                            <span className="memoBtnDropdown collapsed" data-toggle="collapse" data-target="#memoDropdown12"><i className="fa fa-angle-down"></i></span>
                            <ul id="memoDropdown12" className="memoDropdown collapse">
                                <li className="hasMemoDropdown">
                                    <a href="collections.html" title="">Catalog</a>
                                    <span className="memoBtnDropdown collapsed" data-toggle="collapse" data-target="#memoDropdown221"><i className="fa fa-angle-down"></i></span>
                                    <ul id="memoDropdown221" className="memoDropdown collapse">
                                        <li className="">
                                            <a href="collections/furniture.html" title="">Furniture</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/decor-art.html" title="">Decor Art</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/illumination.html" title="">Illumination</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/kitchen-things.html" title="">Kitchen Things</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/best-sellter.html" title="">Best Sellter</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="hasMemoDropdown">
                                    <a href="collections/best-sellter.html" title="">Shop pages</a>
                                    <span className="memoBtnDropdown collapsed" data-toggle="collapse" data-target="#memoDropdown222"><i className="fa fa-angle-down"></i></span>
                                    <ul id="memoDropdown222" className="memoDropdown collapse">
                                        <li className="">
                                            <a href="collections/new-products.html" title="">Left Sidebar</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/best-sellter.html" title="">Right Sidebar</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/all.html" title="">Full Width</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/furniture.html" title="">Collection List</a>
                                        </li>
                                        <li className="">
                                            <a href="collections/all.html" title="">Collection Grid</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="">
                            <a href="blogs/news.html" title="">Blog</a>
                        </li>
                        <li className="">
                            <a href="collections.html" title="">Collections</a>
                        </li>
                        <li className="">
                            <a href="pages/contact-us.html" title="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
