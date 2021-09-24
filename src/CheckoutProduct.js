import React from "react";
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider";
export default function CheckoutProduct(props) {
  const { item_id, title, image, price, rating } = props;
  const [{}, dispatch] = useStateValue()
  const RemoveFromBasket = () => {
      // remove item from basket...
      dispatch({
          type: "REMOVE_FROM_BASKET",
          item_id
      })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product-image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__pric">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(Math.floor(rating))
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={RemoveFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}
