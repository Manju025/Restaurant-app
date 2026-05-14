import {useContext} from 'react'
import AppContext from '../../context/AppContext'

import Header from '../Header'
import './index.css'

const Cart = () => {
  const {
    cartList,
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeAllCartItems,
  } = useContext(AppContext)

  return (
    <div className="cart">
      <Header />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-head">
            <h1>Your Cart</h1>
            <button type="button" onClick={() => removeAllCartItems()}>
              Remove All
            </button>
          </div>

          {cartList.map(item => (
            <div className="cart-card" id={item.dish_id}>
              <div className="cart-card-left">
                <img
                  src={item.dish_image}
                  alt={item.dish_name}
                  className="cart-card-img"
                />
                <div className="cart-card-details">
                  <h3 className="cart-card-header">{item.dish_name}</h3>
                  <h2 className="cart-card-price">
                    {item.dish_currency} {item.dish_price}
                  </h2>
                </div>
              </div>
              <div className="cart-card-right">
                <div className="cart-card-btns">
                  <button
                    type="button"
                    className="cart-card-btn"
                    onClick={() => decrementCartItemQuantity(item.dish_id)}
                  >
                    -
                  </button>
                  <p className="cart-card-count">{item.quantity}</p>
                  <button
                    type="button"
                    className="cart-card-btn"
                    onClick={() => incrementCartItemQuantity(item.dish_id)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeCartItem(item.dish_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
