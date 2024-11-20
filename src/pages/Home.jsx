import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { all } from 'axios';

const Home = () => {
  const dispatch = useDispatch(); // useDispatch returns a function to dispatch actions
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer);
  const[currentPage,setCurrentPage] =useState(1)
  const productsPerPage = 8 
  const totalpage = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageProductLastIndex =currentPage * productsPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex - productsPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  const navigateToNextPage =()=>{
    if(currentPage!=totalpage){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToPreviousPage =()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
   
  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto"> 
        {loading ? 
          <div className="flex justify-center items-center my-5 text-lg">
            <img 
              width="150px" 
              height="150px" 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" 
              alt="Loading..."
            />
            loading...
          </div>
         : 
          <>
            <div className="grid grid-cols-4 gap-4">
              {allProducts?.length > 0 ? 
                visibleAllProducts.map(product => (
                  <div key={product?.id} className="rounded border p-2 shadow">
                    <img width="100%" height="200px" src={product.thumbnail} alt="" 
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{product.title}</h3>
                    </div>
                    <Link 
                      to={`/${product?.id}/view`} 
                      className="bg-violet-600 rounded p-1 mt-3 text-white inline-block"
                    >
                      View More..
                    </Link>
                  </div>
                ))
               : (
                <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
                  Product not found!!
                </div>
              )}
            </div>
            <div className="text-2xl text-center font-bold mt-20">
              <span onClick={navigateToPreviousPage} className="cursor-pointer"><i className="fa-solid fa-backward me-5"></i></span>
              <span>{currentPage}of {totalpage}</span>
              <span onClick={navigateToNextPage} className="cursor-pointer"><i className="fa-solid fa-forward ms-5"></i></span>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Home;
