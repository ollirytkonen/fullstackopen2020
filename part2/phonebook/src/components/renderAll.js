import React from 'react'
import RenderPerson from './renderPerson'

const RenderAll = (props) => {
    return(
        <div>
            <h2>Numbers</h2>          
            <RenderPerson personsToShow={props.personsToShow}
            handleDelete={props.handleDelete}
            />
        </div>
    )
}

export default RenderAll;