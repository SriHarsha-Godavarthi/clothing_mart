'use client';
import {  useEffect,useState } from "react";
import Product from "./product";
export default function Products(): React.JSX.Element {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const res = await fetch('https://fakestoreapiserver.reactbd.org/api/walmartproducts', {cache: 'no-store'});
        const data = await res.json();
        console.log("response", data);
        setProducts(data.data);
        
    }
    useEffect(()=>{
        getProducts();
    },[])

  return (<div className="products-grid">      
  {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}