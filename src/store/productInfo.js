import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    price: {
        new: 0,
        old: 0,
        totalDiscount: 0,
    },
    colors: [],
    sizes: [],
    skus: [],
    availability: {
        indicator: "size",
        avaiable: [],
    },
    selectedColor: {
        name: "Select a color",
        index: -1,
    },
};

const checkAvailability = (indicator, id, skus) => {
    const result = {};
    result.indicator = indicator;
    if (indicator === "nothing") {
        result.avaiable = skus.map((item) => true);
    } else {
        result.avaiable = skus.map((item) => item.props[0] == id);
    }
    return result;
};

const slice = createSlice({
    name: "ProductInfo",
    initialState,
    reducers: {
        populateProductInfo(state, action) {
            state.title = action.payload.title;
            state.price = action.payload.price;
            state.colors = action.payload.colors;
            state.sizes = action.payload.sizes;
            state.skus = action.payload.skus;
            state.availability = checkAvailability(
                "nothing",
                action.payload.colors[0].id,
                action.payload.skus
            );
        },
        updateSelectedColor(state, action) {
            state.selectedColor = action.payload;
            state.availability = checkAvailability(
                "size",
                state.colors[action.payload.index].id,
                state.skus,
            );
        },
    },
});

export const { populateProductInfo, updateSelectedColor } = slice.actions;
export default slice.reducer;
