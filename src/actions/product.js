import api from './api';
import {
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAIL,
    PRODUCT_CREATE,
    PRODUCT_INSERT,
    PRODUCT_DELETE
} from '../constants/types';

export const fetchProduct = () => dispatch => ({
    type: FETCH_PRODUCT
})

export const  fetchProductSuccess = products => ({
    type: FETCH_PRODUCT_SUCCESS,
    products
})

export const  fetchProductFail = messages => ({
    type: FETCH_PRODUCT_FAIL,
    messages
})

export const fetchProductAction = () => dispatch => {
    dispatch(fetchProduct())
    return api.product.fetchAll().then(response => {
        dispatch(fetchProductSuccess(response.data))
    })
        .catch(error => {
            dispatch(fetchProductFail(error.response))
            return Promise.reject(error.response);
        })
}

export const createProduct = () => ({
    type: PRODUCT_CREATE
})