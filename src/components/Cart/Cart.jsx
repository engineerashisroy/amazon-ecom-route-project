import React from "react";
import "./cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(props.children);

  let total = 0;
  let shippingPrice = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shippingPrice = shippingPrice + product.shipping * product.quantity;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = parseFloat(total + shippingPrice + tax);
  return (
    <div className="cart-details">
      <h1>Order Summary</h1>
      <h3>Selected Item:{quantity}</h3>
      <h3>Total Price: $ {total}</h3>
      <h4>Total Shipping Charge: $ {shippingPrice}</h4>
      <h5>Tax : ${tax}</h5>
      <h2>Grand Total: ${grandTotal}</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default Cart;
