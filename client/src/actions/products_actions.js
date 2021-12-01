import axios from 'axios';
import { PRODUCT_SERVER } from '../components/utils/misc';

import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    CLEAR_PRODUCT,
    ADD_BRAND,
    ADD_WOOD,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL
} from "./types";

export function getProductDetail(id){
    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single}`)
    .then(response=>{
        return response.data[0]
    })
    return {
        type:GET_PRODUCT_DETAIL,
        payload:request
    }
}

export function clearProductDetail(id){
    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single}`)
    .then(response=>{
        return response.data[0]
    })
    return {
        type:CLEAR_PRODUCT_DETAIL,
        payload:request
    }
}

export function addWood(dataToSubmit, existingWoods){
    const request = axios.post(`${PRODUCT_SERVER}/wood`,dataToSubmit)
    .then(response=>{
        let woods = [
            ...existingWoods,
            response.data.wood
        ];
        return {
            success: response.data.success,
            woods
        }
    });
    return {
        type: ADD_WOOD,
        payload: request
    }
}

export function getProductsBySell() {
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
        .then(response => response.data)
    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }
}

export function getProductsByArrival() {
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(response => response.data)
    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function addProduct(datatoSubmit) {
    console.log("Data to submit", datatoSubmit)
    const request = axios.post(`${PRODUCT_SERVER}/article`, datatoSubmit)
        .then(response => response.data);
    return {
        type: ADD_PRODUCT,
        payload: request
    }
}

export function clearProduct() {
    return {
        type: CLEAR_PRODUCT,
        payload: ''
    }
}




export function getProductsToShop(skip, limit, filters = [], previousState = []) {
    const data = {
        limit,
        skip,
        filters
    }
    const request = axios.post(`${PRODUCT_SERVER}/shop`, data)
        .then(response => {
            let newState = [
                ...previousState,
                ...response.data.articles
            ];
            return {
                size: response.data.size,
                articles: newState
            }
        });

    return {
        type: GET_PRODUCTS_TO_SHOP,
        payload: request
    }
}



//////Categories ////

export function getBrands() {
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data)
    return {
        type: GET_BRANDS,
        payload: request
    }
}


export function getWoods() {
    const request = axios.get(`${PRODUCT_SERVER}/woods`)
        .then(response => response.data.wood) 
    return {
        type: GET_WOODS,
        payload: request
    }
}


//Brand 

export function addBrand(dataTosubmit, existingBrands) {
    const request = axios.get(`${PRODUCT_SERVER}/brand`)
        .then(response => {
            console.log(response.data)
            let brands = [
                ...existingBrands,
                response.data.brand
            ]
            return{
                success:response.data.success,
                brands
            }
        })
    return {
        type: ADD_BRAND,
        payload: request
    }
}