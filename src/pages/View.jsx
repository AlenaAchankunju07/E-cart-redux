import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <img width={'350px'} height={'250px'} src="https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382816.jpg" alt="" />
        
      <div>
          <h3 className='font-bold'>PID:id</h3>
          <h1 className='text-5xl font-bold'>Title</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
          <h4>Brand :brand</h4>
          <h4>Category:category</h4>
          <p>
            <span className='fonbnt-bold'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut vel dolores cum optio sunt praesentium, sapiente amet quas? Distinctio officiis magnam perferendis quibusdam ad cumque. Mollitia consectetur voluptatibus aut veniam?
            </span>
          </p>
          <div className="flex justify-between mt-5">
            <button className="bg-blue-600 rounded text-white p-2">Add to Wishlist</button>
            <button className="bg-green-600 rounded  text-white p-2">Add to Cart</button>

          </div>
      </div>
      </div>
      </div>
    View </>
  )
}

export default View
