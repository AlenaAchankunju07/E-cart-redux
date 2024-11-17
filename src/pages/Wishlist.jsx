import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>
    <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'>
        <>
          <h1 className="text-3xl font-bold text-red-600">My Wishlist</h1>
          <div className="grid grid-cols-4 gap-4">
        <div className="rounded border p-2 shadow">
        <img width={'100%'} height={'200px'} src="https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382816.jpg" alt="" />
       <div className='text-center'> 
        <h3 className='text-xl font-bold'>title</h3>
          <div className="flex justify-evenly mt-3">
              <button className="text-xl"><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
              <button className="text-xl"><i className="fa-solid fa-cart-plus text-green-700"></i></button>
            </div>
           </div>
          </div>
         </div>
        </>
      </div>
    </>
  )
}

export default Wishlist