import {useContext} from 'react'
import {useHistory, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import AppContext from '../../context/AppContext'
import './index.css'

const Header = () => {
  const {restaurantName, cartList} = useContext(AppContext)
  const history = useHistory()

  const cartCount = cartList ? cartList.length : 0

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="header">
      <h1 className="header-title" onClick={() => history.push('/')}>
        {restaurantName}
      </h1>

      <div className="header-right">
        <button className="header-btn" type="button" onClick={onClickLogout}>
          Logout
        </button>

        <Link to="/cart">
          <button type="button" className="cart-btn">
            <div className="header-icon">
              <p className="i-counter">{cartCount}</p>
              <AiOutlineShoppingCart className="cart-icon" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
