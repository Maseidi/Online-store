import React from 'react'
import '../style/text-field.css'

const TextField = (params) => {
  const {
    id,
    label,
    placeholder = '',
    type = 'useState',
    callBackFn,
    rows = false
  } = params

  const changeValue = (e) => {
    if (type !== 'useState') {
      callBackFn({ type, payload: { newValue: e.target.value } })
      return
    }
    callBackFn(e.target.value)
  }

  return (
    <div className="text-field">
      <label htmlFor={id}>{label}</label>
      {rows ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={changeValue}
          rows={rows}
        />
      ) : (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={changeValue}
        />
      )}
    </div>
  )
}

export default TextField
