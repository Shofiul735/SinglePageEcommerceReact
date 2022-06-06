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
        avaiable: {},
    },
    selectedColor: {
        name: "Select a color",
        index: -1,
        id: 0,
    },
    selectedSize: {
        name: "Select a size",
        index: -1,
        id: 0,
    },
};

const checkAvailability = (indicator, id, skus) => {
    const result = {};
    result.indicator = indicator;
    if (indicator === "nothing") {
        for (let item of skus) {
            result[item.props[1]] = true;
        }
    } else {
        for (let item of skus) {
            if (item.props[0] == id) {
                result[item.props[1]] = true;
            }
        }
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
                state.skus
            );
        },
        updateSelectedSize(state, action) {
            state.selectedSize = action.payload;
        },
        updatePrice(state, action) {
            const result = {
                new: action.payload.new,
                old: action.payload.old,
                totalDiscount:
                    (Math.abs(action.payload.new - action.payload.old) /
                        action.payload.old) *
                    100,
            };
            state.price = result;
        },
    },
});

export const {
    populateProductInfo,
    updateSelectedColor,
    updateSelectedSize,
    updatePrice,
} = slice.actions;
export default slice.reducer;
