import {
    PRODUCT_CREATE,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
} from '../constants/types';

const initialState = {
    data: {},
    loading: false,
    error: false
}

export default function products ( state = initialState, action = {}) {
    switch(action.type){
        default: return [...state];
    }
};