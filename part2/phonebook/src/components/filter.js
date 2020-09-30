import React from 'react'

const Filter = (props) => {
    return(
    <form >
        <div>
            filter shows with: <input value={props.newFilter} onChange={props.handleFilterChange}/>
        </div>
      </form>    
    )
}

export default Filter;