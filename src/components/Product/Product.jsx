import React from "react";
import "./product.css";

const Product = ({ handleAddToCart, product }) => {
  const { name, img, seller, ratings, price } = product;
  return (
    <section className="product-container">
      <img src={img} alt="" />
      <div className="product-details">
        <h2>{name}</h2>
        <h3>Price ${price}</h3>
        <p>Seller : {seller}</p>
        <p>Ratings : {ratings} star</p>
      </div>
      <button
        className="product-button"
        onClick={() => handleAddToCart(product)}
      >
        Add To Cart
      </button>
    </section>
  );
};

export default Product;
