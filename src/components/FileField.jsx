import React from 'react'
import '../style/file-field.css'

const FileField = (params) => {

    const {id, label, type, dispatch} = params

    const changeValue = (e) => {
        const image = e.target.value.replace('C:\\fakepath\\', '../src/assets/images/products/')
        dispatch({type, payload: {newValue: image}})
    }

  return (
    <div className='file-field'>
        <label htmlFor={id}>{label}</label>
        <input id={id} type='file' onChange={changeValue}/>
    </div>
  )
}

export default FileField