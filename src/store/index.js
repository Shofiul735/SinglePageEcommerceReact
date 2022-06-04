import { configureStore } from "@reduxjs/toolkit";

import galleryReducer from "./gallery";

const store = configureStore({
    reducer: {
        gallery: galleryReducer, 
    },
});

export default store;