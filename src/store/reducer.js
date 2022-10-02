import { configureStore } from "@reduxjs/toolkit";
import { buttonReducer } from "./buttonSlice";
import { itemsReducer } from "./itemsSlice";

const store = configureStore({
    reducer: {
        button: buttonReducer,
        items: itemsReducer,
    }
})

export default store