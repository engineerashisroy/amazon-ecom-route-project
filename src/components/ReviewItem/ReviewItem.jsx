import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { handleRemoveProduct, cart } = props;
  const { name, price, shipping, quantity, img } = cart;
  return (
    <div className="review-container">
      <img src={img} alt="product-image" />
      <div className="reviewDetails">
        <div className="cart-productDetails">
          <h3>{name}</h3>
          <h4>Price: ${price}</h4>
          <h5>Shipping Cost: ${shipping}</h5>
        </div>
        <div className="delete-item">
          <button className="button" onClick={() => handleRemoveProduct(cart)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
