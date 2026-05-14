import {useState, useContext} from 'react'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import Card from '../Card'
import './index.css'

const Home = () => {
  const [activeTab, setActiveTab] = useState(0)

  const {menus} = useContext(AppContext)

  return (
    <div className="body">
      <Header />

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
        {menus.length > 0 && <Card dishes={menus[activeTab].category_dishes} />}
      </div>
    </div>
  )
}

export default Home
