import React from 'react'

const AddPerson = (props) => {

return(
<div>
    <h2>add a new</h2>
    <form onSubmit={props.addPerson}>
      <div>
        name: <input value={props.newName} 
        onChange={props.handleNameChange} 
        required minLength="3"/><br/>

        number: <input value={props.newNumber} 
        onChange={props.handleNumberChange} 
        required minLength="10"/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
</div>
)

}

export default AddPerson;