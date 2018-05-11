import React from 'react'
import PropTypes from 'prop-types'

import "./ProductItem.css"

const ProductItem = ({
    price,
    inventory,
    title,
    image,product,
    onAddToCartClicked
  }) => (
  <div className = "product-container" >
   <div className = "details-container">
    <div className = "product-image" >
      <img src = { product.image} alt = "Item Image" width = "455" height = "303" />
    </div>
    <div className= "product-details-1">
      <h4> {product.title} </h4> 
       <p id= "inventory-log" > { product.inventory ? `  ${product.inventory}` + " " + "REMAINING" : null } </p> 
        <button onClick={onAddToCartClicked} disabled={product.inventory > 0 ? '' : 'disabled'}>
         {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
     </div>
     
     <div className = "product-details-2" >
       <p id = "price-tag" > &#36;{product.price}</p>
      </div>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
