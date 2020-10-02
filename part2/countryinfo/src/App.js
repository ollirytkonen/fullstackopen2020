import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Weather = (props) => {
  console.log(props.list)

  return(
    <div>
      <h5>temperature</h5>
      <h5>wind</h5>
    </div>
  )
}

const CountryInfo = (props) => {
  let list = props.countries.filter(country => country.name.toLowerCase().indexOf(props.newFilter.toLowerCase()) > -1)
  
  return(
    <div>
          {list.map(country => 
            <div key={country.name}>
                <h1>{country.name}</h1>
                  Capital: {country.capital}<br/>
                  Population: {country.population}
                  <h3>Langueages</h3>
                    {country.languages.map(language=>
                      <li key = {language.name}>{language.name} </li>
                    )}  
                  <img src={country.flag} 
                    alt="country flag"
                    style={{ height: 100 , width: 150}}>
                  </img>
                  <h3>weather in {country.capital}</h3>
                  <Weather list={list} wheather={props.weather} setWeather={props.setWeather}/>
                </div>
                )}
              
            </div>
        
      )
}
const CountryList = (props) => {
  return(
    <div>
      {props.list.map(country => 
        <p key={country.name}>{country.name} 
        <button key ={country.name} 
        onClick={() => props.handleClick(country.name)}>Show</button></p>)}
    </div>
  )
}

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [wheather, setWeather] = useState([])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleClick = (props) => {
    setShowAll(false)
    setNewFilter(props)
  }

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])
 
  const handleFilter = () => {
    
    let list = countries.filter(country => country.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1)
      if(newFilter.length === 0){
        return null;
      }else if(list.length > 10){
        return <p>too many matches</p>
      }else if(list.length < 10 && list.length > 1){
        return <CountryList newFilter={newFilter} handleClick={handleClick} list={list}/>
      } else if(list.length === 1){
        return <CountryInfo countries={countries} newFilter={newFilter} setWeather={setWeather} wheather={wheather}/>        
      }
  }
  const handleInfo = () => {
    let list = countries.filter(country => country.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1)
    if ( list.length > 1){
      setShowAll(true)
    }
    return <CountryInfo countries={countries} newFilter={newFilter}/>
  }
  
  return (
    <div>
      <div>
        <form>
          Find countries <input value={newFilter} onChange={handleFilterChange}/>
        </form>
      </div>
        <div>
        {showAll ? (
          <div>{handleFilter()}</div>
        ) : (
          <div>{handleInfo()}</div>
          )}
        </div>
    </div>
  );
}

export default App;