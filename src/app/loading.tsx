import "@/styles/loading.css";

export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="spinner"></div>
                <h2 className="loading-title">Loading Dashboard</h2>
                <p className="loading-text">Please wait while we fetch your data...</p>
            </div>
            
            {/* Product skeleton grid */}
            <div className="products-grid">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="product-card skeleton" aria-label="Loading product">
                        <div className="product-image-wrapper skeleton-image"></div>
                        <div className="product-details">
                            <div className="skeleton-text skeleton-title"></div>
                            <div className="skeleton-text skeleton-desc"></div>
                            <div className="skeleton-text skeleton-price"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}