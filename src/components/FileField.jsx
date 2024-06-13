import React from 'react'
import '../style/file-field.css'

const FileField = (params) => {
  const { id, label, type = 'useState', callBackFn } = params

  const changeValue = (e) => {
    const image = e.target.value.replace(
      'C:\\fakepath\\',
      '../src/assets/images/products/'
    )
    if ( type !== 'useStae' ) {
      callBackFn({ type, payload: { newValue: image } })
      return
    }
    callBackFn(image)
  }

  return (
    <div className="file-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="file" onChange={changeValue} />
    </div>
  )
}

export default FileField
