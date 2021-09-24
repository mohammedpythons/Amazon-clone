import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const { id, title, image, price, rating } = props;
const [ {}, dispatch ] = useStateValue();
const addToBasket = () => {
  //Add item to basket
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id,
      title,
      image,
      price,
      rating
    },
  })
}
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(Math.floor(rating))
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product's image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
