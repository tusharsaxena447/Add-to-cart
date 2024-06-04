import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : [],
    totalPrice : 0
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state,action) =>{
            state.value.push(action.payload);
            state.totalPrice += action.payload.price;
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer