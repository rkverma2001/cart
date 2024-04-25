const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img
        src={product.img}
        alt={product.title}
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{product.title}</h3>
      <p className="prices-product">₹{product.price}</p>
      <button onClick={() => addToCart(product)} className="button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
