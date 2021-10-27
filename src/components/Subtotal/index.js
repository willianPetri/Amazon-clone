import React, { useState, useEffect } from 'react'
import './style.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';

function Subtotal() {
  const [result, setResult] = useState(0);
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    setResult(basket.map((item) => item.price).reduce((total, price) => total + price));
    
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} {basket.length > 1 ? 'items' : 'item'}): <strong>{result}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
