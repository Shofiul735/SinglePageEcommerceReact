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
        populateProductInfo(state,action){
            state.title = action.payload.title;
            state.price = action.payload.price;
            state.colors = action.payload.colors;
            state.sizes = action.payload.sizes;
            state.skus = action.payload.skus;
            state.availability = checkAvailability(['size',action.payload.colors[0].id],action.payload.skus);
        }
    }
});