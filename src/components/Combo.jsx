import React from 'react'
import '../style/combo.css'

const Combo = (params) => {
  const { id, label, valueMap, type, dispatch } = params

  const changeValue = (e) =>
    dispatch({ type, payload: { newValue: e.target.value } })

  return (
    <div className="combo">
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={changeValue}>
        {valueMap.map((elem, index) => {
          return (
            <option key={index} value={elem.value}>
              {elem.option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Combo
