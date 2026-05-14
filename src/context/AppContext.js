import {createContext} from 'react'

const AppContext = createContext({
  restaurantName: '',
  menus: [],
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuality: () => {},
  decrementCartItemQuality: () => {},
  removeAllCartItems: () => {},
})

export default AppContext
