import React from 'react'

const RenderPerson = (props) => {
    return(

        <ul className="list">{props.personsToShow.map(person =>
        <li key={person.id}>
            {person.name} {person.number} 
            <button key={person.id} onClick={()=> props.handleDelete(person.id)}>X</button>
            </li>)}
        </ul>
            
    )
}

export default RenderPerson;