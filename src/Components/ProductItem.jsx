import "./product.css";
function ProductItem({ product }) {
  return (
    <div key={product.id} className="product-card">
      <div className="product-img-container">
        <img className="product-img" src={product.image} alt={product.title} />
      </div>

      <h2 className="product-title">{product.title}</h2>
      <p className="product-price"> ${product.price}</p>
      <p className="product-rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
}

export default ProductItem;
