import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../component/Layout/Footer'
import Header from '../component/Layout/Header'
import ProductDetails from '../component/Products/ProductDetails'
import { productData } from '../static/data'
import SuggestedProduct from "../component/Products/SuggestedProduct.jsx"

const ProductDetailsPage = () => {
    const {name}=useParams();
    const [data,setData]=useState(null);
    const productName= name.replace(/-/g," "); //some issue with whitespace

    console.log(name);

    useEffect(() => {
      const data= productData.find((i)=> i.name === productName );
      setData(data);
    
    }, [])

    return(
    
    <div>
        <Header></Header>
        <ProductDetails data={data}/>
        {
            data && <SuggestedProduct data={data}/>
        }
        <Footer></Footer>
    </div>
  );

};

export default ProductDetailsPage