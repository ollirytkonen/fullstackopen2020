import React from 'react'

const SuccesMessage = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="succeful">
        {message}
      </div>
    )
  }

export default SuccesMessage;