import React from "react";

function CheckoutMedicine(props) {

  const removeFromCart = () => {

  };

  return (
    <div className="checkoutMedicine">
      <img
        className="checkoutMedicine__image"
        src={props.image}
        alt="checkout medicine"
      />
      <div className="checkoutMedicine__info">
        <p className="checkoutMedicine__title">{props.title}</p>

        <p>{props.expiry}</p>
        <button onClick={removeFromCart}>Remove Medicine</button>
      </div>
    </div>
  );
}

export default CheckoutMedicine;
