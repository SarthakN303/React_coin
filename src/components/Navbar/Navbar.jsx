import './Navbar.css'
import logo from '../../assets/ReactCoin.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../Context/CoinContext'

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' })
        break
      }
      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' })
        break
      }
      case 'inr': {
        setCurrency({ name: 'inr', symbol: '₹' })
        break
      }

      default: {
        setCurrency({ name: 'usd', symbol: '$' })
        break
      }
    }
  }
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />

      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          SignUp <img src={arrow_icon} alt="" />
        </button>
      </div>
    </header>
  )
}
export default Navbar
