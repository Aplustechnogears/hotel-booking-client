import { PACKAGE_LIST_FAIL, PACKAGE_LIST_REQUEST, PACKAGE_LIST_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_TOP_FAIL, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS } from '../constants/productConstants';
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../constants/productConstants';
import axios from 'axios';


export const listProducts = ( keyword= '' , pageNumber='', roomCount=0, checkInDate="0", checkOutDate="") => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST  })

        console.log('roomCount',roomCount);
        if(roomCount){
            roomCount = Number(roomCount)
        }
        if(checkInDate){
            checkInDate = new Date(checkInDate).getTime()
        }
        if( checkOutDate){
            checkOutDate= new Date(checkOutDate).getTime()
        }

        const { data } = await axios.get(`https://hotel-server-nbih.onrender.com/api/products?keyword=${keyword}&pageNumber=${pageNumber}&roomCount=${roomCount}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
        const query={
            keyword: keyword,
            pageNumber: pageNumber
        }
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
            query
        })
        
    }catch(error){
        dispatch({
        type :PRODUCT_LIST_FAIL,
        payload : error.response && error.response.data.message ? error.response.data.message : error.message
    })
    }
}

export const listPackages = ( keyword= '' , pageNumber='', roomCount=0, checkInDate="0", checkOutDate="") => async (dispatch) => {
    try{
        dispatch({ type: PACKAGE_LIST_REQUEST  })

        console.log('roomCount',roomCount);
        if(roomCount){
            roomCount = Number(roomCount)
        }
        if(checkInDate){
            checkInDate = new Date(checkInDate).getTime()
        }
        if( checkOutDate){
            checkOutDate= new Date(checkOutDate).getTime()
        }

        const { data } = await axios.get(`https://hotel-server-nbih.onrender.com/api/products?category=${'Package'}&keyword=${keyword}&pageNumber=${pageNumber}&roomCount=${roomCount}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
        console.log('data---',data);
        const query={
            keyword: keyword,
            pageNumber: pageNumber
        }
        dispatch({
            type: PACKAGE_LIST_SUCCESS,
            payload: data,
            query
        })
        
    }catch(error){
        dispatch({
        type :PACKAGE_LIST_FAIL,
        payload : error.response && error.response.data.message ? error.response.data.message : error.message
    })
    }
}


export const listProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST  })

        const { data } = await axios.get(`https://hotel-server-nbih.onrender.com/api/products/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({
        type :PRODUCT_DETAILS_FAIL,
        payload : error.response && error.response.data.message ? error.response.data.message : error.message
    })
    }
} 

export const deleteProduct = ( id ) => async (dispatch, getState) => {
    try{
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        })

        const { userLogin:{ userInfo } } = getState();

        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`https://hotel-server-nbih.onrender.com/api/products/${id}`,config);

        dispatch({
            type:PRODUCT_DELETE_SUCCESS,
        })

        
    }catch(error){
        dispatch({
            type :PRODUCT_DELETE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const createProduct = ( category="Room") => async (dispatch, getState) => {
    try{
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })

        const { userLogin:{ userInfo } } = getState();

        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`https://hotel-server-nbih.onrender.com/api/products`,{category:category},config);

        dispatch({
            type:PRODUCT_CREATE_SUCCESS,
            payload:data

        })

         
    }catch(error){
        dispatch({
            type :PRODUCT_CREATE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateProduct = ( product ) => async (dispatch, getState) => {
    try{
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        })

        const { userLogin:{ userInfo } } = getState();

        const config = {
            headers:{
                'Content-Type':"application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`https://hotel-server-nbih.onrender.com/api/products/${product._id}`,product,config);

        dispatch({
            type:PRODUCT_UPDATE_SUCCESS,
            payload:data

        })

         
    }catch(error){
        dispatch({
            type :PRODUCT_UPDATE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listTopProducts = (  ) => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_TOP_REQUEST  })

        const { data } = await axios.get(`https://hotel-server-nbih.onrender.com/api/products/top`);

        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({
        type :PRODUCT_TOP_FAIL,
        payload : error.response && error.response.data.message ? error.response.data.message : error.message
    })
    }
}
