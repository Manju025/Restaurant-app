import {useState, useEffect} from 'react'
import './Card.css'

const Card = ({dishes, setCartCount}) => {
  const [counts, setCounts] = useState({})

  const increment = id => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const decrement = id => {
    setCounts(prev => {
      if (!prev[id]) return prev
      return {...prev, [id]: prev[id] - 1}
    })
  }

  useEffect(() => {
    const total = Object.values(counts).reduce((a, b) => a + b, 0)
    setCartCount(total)
  }, [counts, setCartCount])

  return (
    <div>
      {dishes.map(dish => (
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
                    onClick={() => decrement(dish.dish_id)}
                  >
                    -
                  </button>
                  <p className="dish-count">{counts[dish.dish_id] || 0}</p>
                  <button
                    className="dish-btn"
                    type="button"
                    onClick={() => increment(dish.dish_id)}
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
            <img src={dish.dish_image} alt="dish" className="dish-img" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
