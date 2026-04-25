import {useState, useEffect} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Card from './components/Card'
import './App.css'

const App = () => {
  const [menus, setMenus] = useState([])
  const [d, setD] = useState([])
  const [activeTab, setActiveTab] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await response.json()
      setMenus(data[0].table_menu_list)
      setD(data[0])
    }
    fetchData()
  }, [])

  return (
    <div className="body">
      <div className="header">
        <h1 className="header-title">{d.restaurant_name}</h1>
        <div className="header-right">
          <button className="header-btn" type="button">
            My Orders
          </button>
          <div className="header-icon">
            <p className="i-counter">{cartCount}</p>
            <AiOutlineShoppingCart className="header-icon" />
          </div>
        </div>
      </div>
      <div className="tabs">
        {menus.map((each, index) => (
          <button
            key={each.menu_category_id}
            className={
              index === activeTab ? 'active-tabs-btn tabs-btn' : 'tabs-btn'
            }
            onClick={() => setActiveTab(index)}
            type="button"
          >
            {each.menu_category}
          </button>
        ))}
      </div>
      <div className="cards-container">
        {menus.length > 0 && (
          <Card
            dishes={menus[activeTab].category_dishes}
            setCartCount={setCartCount}
          />
        )}
      </div>
    </div>
  )
}

export default App
