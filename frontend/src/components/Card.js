import React from 'react'
// import { Link } from 'react-router-dom'
// import { addItemToCart } from '../actions/cartActions'
// import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ medicine }) => {

  // const dispatch = useDispatch()

  const addToCart = () => {
    toast.success("Added to cart", {
      position: "top-center",
      theme: "colored"
    })
    // dispatch(addItemToCart(medicine._id, quantity))
  }

  return (
    <div className="col-12 col-md-4">
      <div className="card shadow-lg border-3 p-3">
        <h5 className="card-title">{medicine.medicine}</h5>
        <p className="card-text">{medicine.expiry}</p>
        <img src={medicine.image} className="card-img-top" alt="" height={150} width={50} />
        <div className="card-body mx-auto">
          <button type="button" id="cart_btn" className="mt-3 btn btn-primary" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card