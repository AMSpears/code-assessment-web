import React from 'react'
import PropTypes from 'prop-types'
import "./ProductList.css"
import miniCart from "./miniCart.png"

const ProductsList = ({ title, children }) => (
  <div>
  <div className = "header-container">
    <div className = "tittle">
      <h3>{title}</h3>
    </div>
    <a>
      <div className = "cart-info">     
      <img src = {miniCart} />
      </div> 
    </a>
    </div>
    <div className = "other-info">{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
