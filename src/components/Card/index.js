import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import './Card.css'

const Card = ({dishes}) => {
  const {
    cartList,
    addCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(AppContext)

  return (
    <div>
      {dishes.map(dish => {
        const cartItem = cartList.find(each => each.dish_id === dish.dish_id)
        const quantity = cartItem ? cartItem.quantity : 0

        const onClickPlus = () => {
          if (cartItem) {
            incrementCartItemQuantity(dish.dish_id)
          } else {
            addCartItem(dish)
          }
        }

        return (
          <div key={dish.dish_id} className="card">
            <div className="card-left">
              <img
                src={
                  dish.dish_Type === 1
                    ? 'https://www.pngkey.com/png/detail/245-2459071_non-veg-icon-non-veg-symbol-png.png'
                    : 'https://i.pinimg.com/736x/61/12/6d/61126d135fe2433d3c744dddc3b0343d.jpg'
                }
                alt="dish type"
                className="dish-type"
              />

              <div className="card-left-inner">
                <h3 className="dish-name">{dish.dish_name}</h3>

                <p className="dish-price">
                  {dish.dish_currency} {dish.dish_price}
                </p>

                <p className="dish-des">{dish.dish_description}</p>

                {!dish.dish_Availability ? (
                  <p className="dish-notAvailable">Not available</p>
                ) : (
                  <div className="dish-btns">
                    <button
                      className="dish-btn"
                      type="button"
                      onClick={() => decrementCartItemQuantity(dish.dish_id)}
                    >
                      -
                    </button>

                    <p className="dish-count">{quantity}</p>

                    <button
                      className="dish-btn"
                      type="button"
                      onClick={onClickPlus}
                    >
                      +
                    </button>
                  </div>
                )}

                {dish.addonCat.length > 0 && (
                  <p className="custom">Customizations available</p>
                )}
              </div>
            </div>

            <div className="card-right">
              <p className="dish-cal">{dish.dish_calories} calories</p>

              <img
                src={dish.dish_image}
                alt={dish.dish_name}
                className="dish-img"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
