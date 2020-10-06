import React, { useState, useEffect } from 'react'
import AddPerson from './components/addPerson'
import RenderAll from './components/renderAll'
import Filter from './components/filter'
import personService from './services/persons'


const App = () => {

  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFiler ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons=> {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const findName = persons.map(person=> person.name).includes(newName)
    const message = `${newName} haluatko päivittää numeron?`

    if(findName === true){
     const result = window.confirm(message);
      if(result === true){
      handleUpdate()
      }else{
        return null
      }
    }else{
      const person = {
        name: newName,
        number: newNumber
      }
      personService
          .create(person)
          .then(returnedPerson=> {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
        })     
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
  const handleUpdate = (person, id) => {
    console.log("hello")
  }
  const handleDelete = (id) => {
    const findPerson = persons.find(n => n.id === id)
    const result = window.confirm(`Haluatko poistaa ${findPerson.name} numeron?`);
    if(result === false){
      return null;
    }else{
      personService
        .deletePerson(id)
        .then(res=>{
              setPersons(persons.filter((person) => person.id !== id))
              console.log(res.data)
        }
      )
    }
  }

  const personsToShow = showAll
  ? persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1)
  : persons
  
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
      <RenderAll personsToShow={personsToShow}
        handleDelete={handleDelete}
      />
    </div>
  )
}
export default App