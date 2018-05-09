import React from 'react'
import PropTypes from 'prop-types'
import "./Product.css"

const Product = ({ price, inventory, title }) => (
  <div>
    <h4>{title}</h4> 
     <p id= "price-tag">&#36;{price}</p>
     <p id= "inventory-log">{inventory ? `  ${inventory}` + " " + "REMAINING" : null } </p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
