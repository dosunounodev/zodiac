import React from 'react'

const index = ({children, onClick}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default index
