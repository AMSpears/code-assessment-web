import React from 'react'
import PropTypes from 'prop-types'
import "./Product.css"

const Product = ({ price, inventory, title, image, quantity }) => (

  <div className = "cart-container">

     <div className = "imgage-container">
       <img id= "image" src={image} alt= "Image"/>
     </div>

     <div className = "cart-details">
       <h4>{title}</h4> 
         <p id = "price-tag" > &#36;{price}</p>
         <p id = "remove-tag"> Remove </p>
       <div className= "btns-container">
        <button id = "btn-minus"> - </button> 
          { quantity } 
        <button id = "btn-plus"> + </button> 
        </div> 
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
