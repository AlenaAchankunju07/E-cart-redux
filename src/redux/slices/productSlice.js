import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action return promise
 export const fetchProducts= createAsyncThunk("products/fetchProducts",async()=>{
const result= await axios.get("https://dummyjson.com/products")
// console.log(result.data.products );
sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
return result.data.products

 })
const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProduct :[],
        loading:false,
        errorMsg:""
    },
    reducers:{
        searchProduct : (state,actionByHeader)=>{
          state.allProducts = state.dummyAllProduct.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
        }
        

    }, 
    extraReducers:(builder)=>{ // its value is a function and builder is a class to give each cases and addcase is its method
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            //reducer use an arrow function and the first argument is state and 2nd argument is object with 2 keys payload and type
            state.allProducts= apiResult.payload
            state.dummyAllProduct=  apiResult.payload 
            state.loading= false
            state.errorMsg= ""
        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts= []
            state.dummyAllProduct= []
            state.loading= true
            state.errorMsg= ""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts= []
            state.dummyAllProduct=[]
            state.loading= false
            state.errorMsg= "API call failed"
        })

    }
})  
export const{searchProduct}= productSlice.actions
//since all methods in redux a synchronous method we cannot call the api which is asynchronus in reducer 
export default productSlice.reducer
