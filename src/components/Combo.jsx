import React from 'react'
import '../style/combo.css'

const Combo = (params) => {
  const { id, label, valueMap, type = 'useState', callBackFn } = params

  const changeValue = (e) => {
    if ( type !== 'useState' ) {
      callBackFn({ type, payload: { newValue: e.target.value } })
      return
    } 
    callBackFn(e.target.value)
  }
    

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
