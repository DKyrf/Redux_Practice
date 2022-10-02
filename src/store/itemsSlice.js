import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    orders: [],
    numberOfOrders: []
};

const itemsSlice = createSlice({
    name: "items",
    initialState: initialValue,
    reducers:{
        addOrder(state, value){
            const exist = state.orders.findIndex(el => el._id === value.payload._id);

            exist < 0 
            ? state.orders = [...state.orders, value.payload]
            : state.orders[exist].amount += 1 

            state.numberOfOrders += 1 
        },
        removeOrder(state, value){
            const exist = state.orders.find(el => el._id === value.payload._id);
            state.numberOfOrders -= 1 

            console.log(state);
            // if(exist.amount === 1){
            //     state.orders = state.orders.filter(item => item._id !== value.payload._id)
            // }else{
            //     exist.amount -= 1
            // }

            exist.amount -= 1

        },
        initiallyAdd(state, value){
            state.orders = value.payload;
            const quantity = value.payload.map(el => el.amount)
            .reduce((init, prev) => init + prev, 0)
            state.numberOfOrders = quantity;
        }
    }
});

export const itemsReducer = itemsSlice.reducer;
export const itemsActions = itemsSlice.actions;