import React, { useState } from "react";
import "../Shop/shop.css";
import "./order.css";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { RemoveFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [carts, setCarts] = useCart(products);
  const handleRemoveProduct = (products) => {
    const rest = carts.filter((pd) => pd.id !== products.id);
    setCarts(rest);
    RemoveFromDb(products.id);
  };
  return (
    <div>
      <section className="shop-container">
        <div className="products-containers">
          {carts.map((cart) => (
            <ReviewItem
              cart={cart}
              key={cart.id}
              handleRemoveProduct={handleRemoveProduct}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={carts}>
            <Link to="/inventory">
              <button>Go to Inventory</button>
            </Link>
          </Cart>
        </div>
      </section>
    </div>
  );
};

export default Order;
