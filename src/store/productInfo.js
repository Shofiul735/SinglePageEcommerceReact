import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title:'',
    price:{
        new: 0,
        old: 0,
        totalDiscount: 0,
    },
    colors: [],
    sizes: [],
    skus: [],
    availability:{
        indicator: 'size',
        avaiable: [],
    },
}

const slice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers:{
        
    }
});