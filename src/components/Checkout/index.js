import React from 'react'
import './style.css'

import Subtotal from '../Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img 
          className="checkout-ad" 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt="" 
        />
        <div className="checkout-title">
          <h2>Your shopping Basket</h2>  
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
