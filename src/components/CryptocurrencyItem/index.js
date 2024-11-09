// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {key, details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details

  return (
    <li key={key}>
      <div>
        <div className="name">
          <img src={currencyLogo} className="currencyLogo" alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
