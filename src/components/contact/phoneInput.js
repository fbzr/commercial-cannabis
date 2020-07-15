import React from "react"
import { Input } from "antd"

const PhoneInput = props => {
  const onChange = e => {
    const { value } = e.target

    const numbers = value.replace(/\D/g, "").substring(0, 10)
    const zip = numbers.substring(0, 3)
    const middle = numbers.substring(3, 6)
    const last = numbers.substring(6, 10)

    let format = ""

    if (numbers.length > 6) {
      format = `(${zip}) ${middle}-${last}`
    } else if (numbers.length > 3) {
      format = `(${zip}) ${middle}`
    } else if (numbers.length > 0) {
      format = `(${zip}`
    }

    props.onChange(format)
  }

  return <Input {...props} onChange={onChange} maxLength={25} />
}

export default PhoneInput
