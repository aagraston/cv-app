import React from 'react'
import uniqid from 'uniqid'

const InputForm = (props) => {
  const { header, inputFields } = props

  const inputFieldJSX = []

  inputFields.forEach((element) => {
    console.log(element)
    inputFieldJSX.push(
      <label htmlFor={element + `-input`} key={uniqid()}>
        {element}
      </label>
    )
    inputFieldJSX.push(
      <input key={uniqid()} type="text" name={element + `-input`} />
    )
  })

  console.log(inputFields)
  return (
    <div className="form-section">
      <div className="form-header">{header}</div>
      <div className="form-input-body">{inputFieldJSX}</div>
    </div>
  )
}

export default InputForm
