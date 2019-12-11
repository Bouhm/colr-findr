import React, { useReducer } from 'react'
import { IColor } from './Colors/ColorCard'

interface IAction {
  type: string
  payload: any
}

// REDUCERS
export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'SET_DATA':
      console.log(action.payload)
      return { ...state, data: action.payload }
    case 'SELECT_COLOR':
      return { ...state, selectedColor: action.payload }
    case 'DESELECT_COLOR':
      return { ...state, selectedColor: null }
    case 'SEARCH_COLOR':
      return { ...state, search: action.payload }
    case 'FILTER_COLOR':
      return { ...state, hueFilter: action.payload }
    default:
      return state
  }
}

interface IState {
  data: IColor[]
  hueFilter: string
  search: string
  selectedColor: IColor | null
}

export const initialState: IState = {
  data: [],
  hueFilter: '',
  search: '',
  selectedColor: null,
}

export const Store = React.createContext<[IState, React.Dispatch<any>]>([initialState, () => {}])

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
}