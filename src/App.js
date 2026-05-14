import {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import AppContext from './context/AppContext'
import './App.css'

const App = () => {
  const [restaurantName, setRestaurantName] = useState('')
  const [menus, setMenus] = useState([])
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )

      const data = await response.json()

      setMenus(data[0].table_menu_list)
      setRestaurantName(data[0].restaurant_name)
      console.log(cartList)
    }

    fetchData()
  }, [cartList])

  const addCartItem = item => {
    const existingItem = cartList.find(each => each.dish_id === item.dish_id)

    if (existingItem) {
      setCartList(
        cartList.map(each =>
          each.dish_id === item.dish_id
            ? {...each, quantity: each.quantity + 1}
            : each,
        ),
      )
    } else {
      setCartList([...cartList, {...item, quantity: 1}])
    }
  }

  const removeCartItem = id => {
    setCartList(cartList.filter(each => each.dish_id !== id))
  }

  const incrementCartItemQuantity = id => {
    setCartList(
      cartList.map(each =>
        each.dish_id === id ? {...each, quantity: each.quantity + 1} : each,
      ),
    )
  }

  const decrementCartItemQuantity = id => {
    const item = cartList.find(each => each.dish_id === id)

    if (item.quantity === 1) {
      removeCartItem(id)
    } else {
      setCartList(
        cartList.map(each =>
          each.dish_id === id ? {...each, quantity: each.quantity - 1} : each,
        ),
      )
    }
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  return (
    <AppContext.Provider
      value={{
        restaurantName,
        menus,
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
