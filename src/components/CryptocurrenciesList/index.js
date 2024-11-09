// Write your JS code here
import './index.css'
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: true, cryptoList: {}}
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({cryptoList: formattedData, isLoading: false})
  }

  renderElements = () => {
    const {cryptoList} = this.state

    return (
      <div className="container">
        <h1 className="cryptoHeading">Cryptocurrency Tracker</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            className="cryptoimg"
            alt="cryptocurrency"
          />
        </div>
        <div className="cryptoList">
          <div>
            <div className="tableHeader">
              <p>Coin Type</p>
              <p>USD</p>
              <p>EURO</p>
            </div>

            <ul>
              {cryptoList.map(each => (
                <CryptocurrencyItem key={each.id} details={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="white" height={50} width={50} />
          </div>
        ) : (
          this.renderElements()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
