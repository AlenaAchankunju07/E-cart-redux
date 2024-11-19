import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        //action-name : reducer function
        addtoCart:(state,actionByComponent)=>{
            const existingProduct =state.find(item=>item.id==actionByComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice= existingProduct.quantity*existingProduct.price
                const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProduct,existingProduct]
            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }

        }
    }
})
export const {addtoCart} = cartSlice.actions
export default cartSlice.reducer