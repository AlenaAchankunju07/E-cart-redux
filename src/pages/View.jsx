import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'

const View = () => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const[product,setProduct] =useState({})
  const {id} =useParams()
  // console.log(id);
  // console.log(product);
  
  // const {allProducts} =useSelector(state=>state.productReducer)
  // console.log(allProducts);
  
useEffect(()=>{
  if(sessionStorage.getItem("allProducts")){
    const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
    console.log(allProducts.find(item=>item.id==id));
    setProduct(allProducts.find(item=>item.id==id))

  }

},[])

const handlewishlist=()=>{
  const existingProduct = userWishlist?.find(item=>item?.id == id);
  if(existingProduct){
    alert("product already in your wishlist")
  }else{
    alert("product added to wishlist")
    dispatch(addToWishlist(product))
  }
}
  return (
    <>
    <Header/>
      <div className="flex flex-col mx-5 pt-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <div>
            <img width={'350px'} height={'250px'} src={product?.thumbnail} alt="" />
            <div className="flex justify-between m-5">
              <button onClick={handlewishlist} className="bg-blue-600 rounded text-white p-2">Add to Wishlist</button>
              <button className="bg-green-600 rounded  text-white p-2">Add to Cart</button>
  
            </div>
          </div>
      <div>
          <h3 className='font-bold'>PID:{product?.id}</h3>
          <h1 className='text-5xl font-bold'>{product?.title}</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
          <h4>Brand :{product?.brand}</h4>
          <h4>Category:{product?.category}</h4>
          <p>
            <span className='font-bold'>
            {product?.description}
            </span>
          </p>
         <h3 className="font-bold mt-4">Client Review</h3>
         {
          product?.reviews?.length>0?
          product?.reviews?.map(item=>(
            <div key={item.date} className="shadow border rounded p-2 mb-2">
              <h5>
                <span className='font-bold'>{item?.reviewerName}</span> :<span>{item?.comment}</span>
              </h5>
              <p>Rating:{item?.rating}<i className ="fa-solid fa-star text-yellow-300"></i> </p>
            </div>
          ))
          :
          <div className="font-bold text-red-600">No reviews!!</div>
         }
      </div>
      </div>
      </div>
    </>
  )
}

export default View
