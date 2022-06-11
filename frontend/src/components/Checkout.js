import React from "react";

function Checkout() {

  const placeOrder = (e) => {
    e.preventDefault();

  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your Cart</h2>
          {/* {basket.map((item) => (
            <CheckoutMedicine
              id={item.id}
              title={item.title}
              expiry={item.expiry}
              image={item.image}
            />
          ))} */}
        </div>
      </div>
      <div className="checkout__right">
        <div className="order">
          <div className="address">
            <h3>Delivery Address</h3>
            <form action="submit">
              <input type="text"></input>
              <br />
              <button className="placeOrder__button" onClick={placeOrder}>
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
