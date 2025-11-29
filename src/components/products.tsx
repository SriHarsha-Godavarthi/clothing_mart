'use client';
import { useEffect, useState } from "react";
import Product from "./product";
import "@/styles/loading.css";

export default function Products(): React.JSX.Element {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [displayCount, setDisplayCount] = useState(6)
    
    const getProducts = async () => {
        try {
            setLoading(true)
            const res = await fetch('https://fakestoreapiserver.reactbd.org/api/walmartproducts', {
                next: { revalidate: 3600 } // Cache for 1 hour
            });
            const data = await res.json();
            setProducts(data.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getProducts();
    }, [])

    const loadMore = () => {
        setDisplayCount(prev => prev + 12);
    }

    if (loading) {
        return (
            <div className="products-grid">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="product-card skeleton">
                        <div className="product-image-wrapper skeleton-image"></div>
                        <div className="product-details">
                            <div className="skeleton-text skeleton-title"></div>
                            <div className="skeleton-text skeleton-desc"></div>
                            <div className="skeleton-text skeleton-price"></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            <div className="products-grid">      
                {products.slice(0, displayCount).map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
            {displayCount < products.length && (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <button 
                        onClick={loadMore} 
                        className="btn btn-primary"
                        style={{ padding: '0.75rem 2rem' }}
                    >
                        Load More ({products.length - displayCount} remaining)
                    </button>
                </div>
            )}
        </>
    );
}