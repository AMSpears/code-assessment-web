import React from 'react'
import PropTypes from 'prop-types'
import "./Product.css"

const Product = ({ price, inventory, title, image }) => (
  <div>
    
   <div>
     <img src={image} alt= "Image"/>
    </div>

    <div>
      <h4>{title}</h4> 
        <p id = "price-tag" > &#36;{price}</p>
    </div>

 </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default Product
