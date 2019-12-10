import React, { ReactNode, useState } from 'react'
import { IColor } from '../Colors/ColorCard'

interface IColorContext {
  color: IColor | null
  setColor: React.Dispatch<any>
}

const ColorContext = React.createContext<IColorContext>({
  color: null,
  setColor: () => {}
})

const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState(null)

  return (
    <ColorContext.Provider value={{ color: color, setColor: setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export { ColorContext, ColorProvider }
