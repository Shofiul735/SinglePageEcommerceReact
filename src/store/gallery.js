import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayImageLink: '',
    images: []
,}

const gallerySlice = createSlice({
    name: 'Gallery',
    initialState,
    reducers: {
        populateData( state,action){
            state.displayImageLink = action.payload.displayLink;
            state.images = action.payload.images;
        },
        replaceDisplayImage(state,action){
            state.displayImageLink = state.images[action.payload];
        }
    }, 
});

export const { populateData, replaceDisplayImage } = gallerySlice.actions;

export default gallerySlice.reducer;