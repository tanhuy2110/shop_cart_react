import api from './api';
import {
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAIL,
    PRODUCT_CREATE,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_INSERT,
    PRODUCT_DELETE
} from '../constants/types';

export const fetchProduct = ()  => ({
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

export const productCreateSuccess = data => ({
    type: PRODUCT_CREATE_SUCCESS,
    data
})

export const productCreateFail = messages => ({
    type: PRODUCT_CREATE_FAIL,
    messages
})

export const fetchAllProduct = () => dispatch => {
    dispatch(fetchProduct())
    return api.product.fetchAll().then(response => {
        dispatch(fetchProductSuccess(response.data))
        return Promise.resolve(response);
    })
        .catch(error => {
            dispatch(fetchProductFail(error.response))
            return Promise.reject(error.response);
        })
}

/**
 * Create Product
 */
export const createAction = data => dispatch => {
    dispatch(productCreate())
    return api.product.create().then(response => {
        dispatch(productCreateSuccess(response.data))
    })
        .catch(error => {
            dispatch(productCreateFail(error.response))
            return Promise.reject(error.response);
        })
}