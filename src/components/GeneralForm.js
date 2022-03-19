import React from 'react'

const GeneralForm = (props) => {
  const { header, name, email, phoneNumber } = props

  return (
    <div className="form-section">
      <div className="form-header">{header}</div>
      <div className="form-input-body">
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" placeholder="name" />

        <label htmlFor="email-input">Name:</label>
        <input type="text" id="email-input" placeholder="email" />

        <label htmlFor="phone-input">Name:</label>
        <input type="text" id="phone-input" placeholder="phonenumber" />
      </div>
    </div>
  )
}

export default GeneralForm
