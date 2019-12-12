import React, { useContext } from 'react'
import styled from 'styled-components'

import useInput from '../Hooks/useInput'
import { Store } from '../Store'
import Input from '../UI/Input'

const Search = () => {
  const { inputVal, handleInputChange } = useInput(undefined)
  const [state, dispatch] = useContext(Store)

  // https://github.com/chodorowicz/ts-debounce/blob/master/src/index.ts
  function debounce<F>(func: F, waitMilliseconds = 50): F {
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    return function(this: any, ...args: any[]) {
      const context = this

      const doLater = () => {
        timeoutId = undefined
      }

      if (timeoutId !== undefined) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(doLater, waitMilliseconds)
    } as any
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e)

    // Leave card detail view when searching
    state.selectedColor && dispatch({ type: 'DESELECT_COLOR' })

    // Debounce and set search filter
    debounce(dispatch({ type: 'SEARCH_COLOR', payload: e.currentTarget.value }), 200)
  }

  return <Input onChange={handleSearch} placeholder="Search" />
}

export default Search
