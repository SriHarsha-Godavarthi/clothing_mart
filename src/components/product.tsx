import { useState } from "react";
import Image from "next/image";
import "@/styles/product.css";

interface ProductProps {
  product: {
    key: number;
    title: string;
    des: string;
    price: number;
    category: string;
    image: string;
    brand: string;
    oldPrice: number;
  //   rating: {
  //     rate: number;
  //     count: number;
  // };
}
}
export default function Product({product}: ProductProps): React.JSX.Element {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="product-card">
        <div className="product-image-wrapper">
          {imageLoading && (
            <div className="image-loading-spinner">
              <div className="spinner-small"></div>
            </div>
          )}
          <Image 
            loading="lazy" 
            src={product.image} 
            alt={product.title} 
            width={200} 
            height={200} 
            className={`product-image ${imageLoading ? 'image-loading' : 'image-loaded'}`}
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className="product-details">
          <h6 className="product-title">{product.title}</h6>
          <p className="product-description">{product.des}</p>
          <div className="product-pricing">
            <span className="old-price">${product.oldPrice}</span>
            <span className="current-price">${product.price}</span>
          </div>
          <p className="product-brand">{product.brand}</p>
          <p className="product-category">Category: {product.category}</p>
          {/* <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
        </div>
    </div>
  );
}