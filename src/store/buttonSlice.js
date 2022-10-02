import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    isToggled: false
};

const buttonSlice = createSlice({
    name: "item",
    initialState: initialValue,
    reducers: {
        toggleIt(state){
            state.isToggled = !state.isToggled
        }
    }
})

export const buttonReducer = buttonSlice.reducer;
export const buttonActions = buttonSlice.actions;