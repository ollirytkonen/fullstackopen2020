import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const StatisticLine = (props) => {
  return(
    <div>{props.text} {props.value}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.buttonValue}>{props.buttonText}</button>
  )
}


const Statistic = (props) => {

    const handleStatic = () => {
      if(props.all === 0){
        return (<p>No feedback given</p>)
      }else{
        return(
        <div>
          <StatisticLine text="good"value={props.good} />
          <StatisticLine text="bad"value={props.bad} />
          <StatisticLine text="neutral"value={props.neutral} />
          <StatisticLine text="all"value={props.all} />
          <StatisticLine text="average"value={props.average/props.all} />
          <StatisticLine text="positive"value={props.average/props.good*100 + "%"} />
        </div>
        )
      }

 }
  return(
        <div>
          <h1>give feedback</h1>
          <Button buttonText ="good" buttonValue={props.handleGood}/>
          <Button buttonText ="bad" buttonValue={props.handleBad}/>
          <Button buttonText ="neutral" buttonValue={props.handleNeutral}/>
          <h1>statistic</h1>
          {handleStatic()}
        </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = (event) => {
        event.preventDefault()
        setGood(good+1)
        setAverage(average+1)
        setAll(all+1)
  }
    const handleBad = (event) => {
        event.preventDefault()
        setBad(bad+1)
        setAverage(average-1)
        setAll(all+1)
    }
    const handleNeutral = (event) => {
        event.preventDefault()
        setNeutral(neutral+1)
        setAll(all+1)
    }

  return (
    <div>
      <Statistic handleBad = {handleBad} handleGood = {handleGood} handleNeutral = {handleNeutral} 
                  good={good} bad={bad} neutral={neutral} average={average} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)