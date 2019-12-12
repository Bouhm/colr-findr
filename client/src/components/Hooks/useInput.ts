import React, { useState } from 'react'

type Value = string | string[] | number | undefined
const useInput = (initialValue = undefined) => {
  const [inputVal, setInputVal] = useState<Value>(initialValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  return {
    inputVal,
    handleInputChange,
  }
}

export default useInput
