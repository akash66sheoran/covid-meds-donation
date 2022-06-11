import React from "react";

function Product(props) {

  const addToCart = () => {

  }
  return (
    <div className="product">
      <div className="product__information">
        <strong>{props.title}</strong>
        <p>
          <small>{props.expiry}</small>
        </p>
      </div>
      <img
        src={props.image}
        alt="medicine"
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
