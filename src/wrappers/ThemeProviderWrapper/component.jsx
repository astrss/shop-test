import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyles/appGeneralStyles'

export const ThemeContext = React.createContext()

const ThemeProviderWrapper = ({
  children
}) => {
  const theme = {}
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderWrapper
