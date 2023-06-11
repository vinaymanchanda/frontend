import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../component/Layout/Header'
import ProductCard from '../component/Route/BestDeals/ProductCard/ProductCard'
import { productData } from '../static/data'
import styles from '../styles/styles'

const ProductsPage = () => {
    const [searchParams]= useSearchParams();
  const categoriesData=searchParams.get('category'); 
  const[data,setData]= useState([]);
    
  useEffect(() => {
    if(categoriesData==null){
        const d= productData && productData.sort((a,b)=> a.total_sell - b.total_sell);
        setData(d);
    } else{
        const d= productData && productData.filter((i)=> i.category=== categoriesData);
        setData(d);

    } 
    },[]);
  
    return (
    <div>
        <Header activeHeading={3}></Header>
        <br/>
        <br/>
        <div className={`${styles.section}`}></div>
        <div className=' grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px]
        xl:grid-cols-5 xl:gap-[30px] mb-12'>
            {
                data && data.map((i,index)=> <ProductCard data={i} key={index}/>)
            }
            
            </div>
            {
                data && data.length ===0 ? (
                    <h1 className='text-center w-full pb-[100px] text-[20px] '>
                        No products found !!
                    </h1>
                ): null
            }

    </div>
  )
}

export default ProductsPage