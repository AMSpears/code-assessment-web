import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import "./Cart.css"
import cartImage from "./cart.png"

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        image= {product.image}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className= "empty-cart-container">
      <div>
        <img id = "empty-cart-image" src= {cartImage}/><br/>
        </div>
        <div>
         <p id= "empty-cart-details"> Please add some products<br/>
         to your cart.
         </p>
     </div>
    </div>

  ) 

  

  return (
    <div>
      <h3 id= "cart-header">Your Cart</h3>
      <div>{nodes}</div>
      <div className= "amount-container">
      <p id= "amount-description">Total</p>
      <p id= "amount" > &#36;{total}</p>
      </div>
      <button id= "checkout-button" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
