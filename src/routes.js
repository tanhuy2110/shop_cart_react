import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/HomePage/Login';
import CartPage from './pages/CartPage/CartPage';
import ProductDetail from './pages/ProductPage/ProductDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Register from './pages/HomePage/Register';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/login',
        exact: true,
        main: () => <Login/>
    },
    {
        path: '/register',
        exact: true,
        main: () => <Register/>
    },
    {
        path: '/cart',
        exact: true,
        main: () => <CartPage/>
    },
    {
        path: '/productDetail',
        exact: true,
        main: () => <ProductDetail/>
    },
    {
        path : '',
        exact: false,
        main: () => <NotFoundPage/>
    }
];

export default routes;