import React, { useState } from 'react'
import AddPerson from './components/addPerson'
import RenderAll from './components/renderAll'
import Filter from './components/filter'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: "0505187509"
  },
    { name: 'Simo Niskanen',
    number: "0505187507"
  },
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFiler ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  const personsToShow = showAll
  ? persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1)
  : persons

  const addPerson = (event) => {
    event.preventDefault()
    const findName = persons.map(person=> person.name).includes(newName)
    const message = `${newName} is already added to phonebook`
    if(findName === true){
      window.alert(message);
    }else{
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFiler(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
        <AddPerson 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
        />
      <RenderAll personsToShow={personsToShow}/>
    </div>
  )
}
export default App