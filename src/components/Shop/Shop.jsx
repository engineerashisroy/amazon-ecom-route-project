import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { AddToDb, GetShoppingCart } from "../../utilities/fakedb";
import useProducts from "../../hooks/useProducts";
import { Link } from "react-router-dom";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useProducts();
  const [carts, setCarts] = useState([]);
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = carts.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCarts(newCart);
    AddToDb(selectedProduct.id);
  };
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    const storeCart = GetShoppingCart();
    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCarts(saveCart);
  }, [products]);
  return (
    <section className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={carts}>
          <Link to="/order">
            <button> Review Order -- </button>
          </Link>
        </Cart>
      </div>
    </section>
  );
};

export default Shop;
