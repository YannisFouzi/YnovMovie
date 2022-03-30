import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useColorScheme } from 'react-native'

import { lightTheme, darkTheme } from './src/config/theme'
import Routes from './src/config/routes'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
