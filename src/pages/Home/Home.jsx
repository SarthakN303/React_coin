import { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../Context/CoinContext'
import './Home.css'

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext)

  const [displayCoin, setDisplayCoin] = useState([])

  useEffect(() => {
    setDisplayCoin(allCoins)
  }, [allCoins])
  return (
    <div className="home">
      <div className="hero">
        <h1>
          React-Coin <br />
          Simplify Crypto Journey
        </h1>
        <p>
          Invest in your future with ReactCoin, the ultimate crypto app designed
          to simplify your cryptocurrency experience.{' '}
        </p>
        <form action="">
          <input type="text" placeholder="Search Crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24Hr Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + ' - ' + item.symbol}</p>
            </div>
            <p>
              {' '}
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {' '}
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
