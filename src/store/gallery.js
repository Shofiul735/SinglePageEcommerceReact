import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayImageLink: "",
    images: [],
};

const gallerySlice = createSlice({
    name: "Gallery",
    initialState,
    reducers: {
        populateData(state, action) {
            state.displayImageLink = action.payload.displayLink;
            state.images = action.payload.images;
        },
        replaceDisplayImage(state, action) {
            if (action.payload.type === "color") {
                state.displayImageLink = action.payload.url;
                return;
            }
            state.displayImageLink = state.images[action.payload].url;
        },
    },
});

export const { populateData, replaceDisplayImage } = gallerySlice.actions;

export default gallerySlice.reducer;
