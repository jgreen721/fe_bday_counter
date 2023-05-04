import React from 'react'

const Button = ({handlePress}) => {
  return (
    

    <button onClick={handlePress} className="btn">

      <div className="small-circle">
        <svg>
          <line x1="3rem" x2="3rem" y1="0" y2="100%"/>
          <circle cx="1rem" cy="100%" r="20"/>
          <circle cx="5rem" cy="100%" r="20"/>
        </svg>
        <div className="line"></div>
      </div>
    </button>
  )
}

export default Button