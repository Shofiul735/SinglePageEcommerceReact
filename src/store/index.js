import { configureStore } from "@reduxjs/toolkit";

import galleryReducer from "./gallery";
import productReducer from './productInfo';

const store = configureStore({
    reducer: {
        gallery: galleryReducer, 
        product: productReducer,
    },
});

export default store;