import React from 'react'

const AddPerson = (props) => {

return(
<div>
    <h2>Add a new</h2>
    <form onSubmit={props.addPerson}>
      <div>
        Name: <input value={props.newName} 
        onChange={props.handleNameChange} 
        /><br/>

        Number: <input value={props.newNumber} 
        onChange={props.handleNumberChange} 
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
</div>
)

}

export default AddPerson;