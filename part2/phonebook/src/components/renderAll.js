import React from 'react'
import RenderPerson from './renderPerson'

const RenderAll = (props) => {
    return(
        <div>
            <h2>Numbers</h2>          
            <RenderPerson personsToShow={props.personsToShow}/>
        </div>
    )
}

export default RenderAll;