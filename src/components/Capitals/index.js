import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const capitalOfCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return capitalOfCountry.country
  }

  render() {
    const {activeCapitalId} = this.state

    const country = this.getCountry()

    return (
      <div className="main-container">
        <div className="capital-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="option-container">
            <select
              className="select-option"
              value={activeCapitalId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCountryDetail => (
                <option
                  key={eachCountryDetail.id}
                  className="option"
                  value={eachCountryDetail.id}
                >
                  {eachCountryDetail.capitalDisplayText}
                </option>
              ))}
            </select>

            <p>is capital of which country?</p>
          </div>

          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
