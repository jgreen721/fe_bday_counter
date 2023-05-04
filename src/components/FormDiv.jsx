import React from 'react'

const FormDiv = ({label,placeholder,hasError,errorMsg}) => {
  return (
    <div className="form-div">
      <label htmlFor={label}>{label}</label>
      <input type="text" name={label} placeholder={placeholder} className={hasError ? "form-control form-input error-form" : "form-control form-input"} autoComplete="off" />
     <h5 className={hasError ? "error" : "error hide-error"}>{errorMsg}</h5>
    </div>
  )
}

export default FormDiv