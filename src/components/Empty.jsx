import React from 'react'
import '../style/empty.css'

const Empty = ({ message }) => {
  return (
    <div className="empty">
      <p>{message}</p>
    </div>
  )
}

export default Empty
