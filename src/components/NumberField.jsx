import React from 'react'
import '../style/number-field.css'

const NumberField = (params) => {
  const {
    id,
    label,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    type,
    dispatch
  } = params

  const changeValue = (e) => {
    if (typeof type === 'string') {
      dispatch({ type, payload: { newValue: e.target.value } })
    } else {
      let result = e.target.value
      if (e.target.value < min) result = min
      if (e.target.value > max) result = max
      e.target.value = result
      type(Number(result))
    }
  }

  return (
    <div className="number-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" min={min} max={max} onChange={changeValue} />
    </div>
  )
}

export default NumberField
