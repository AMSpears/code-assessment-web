import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import "./ProductItem.css"

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className = "product-display" >
    <Product 
      image= {product.image}
      title={product.title}
      price={product.price}
      inventory={product.inventory}  />
      
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
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
