import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { global as GlobalStyles, theme } from './styles'

import Menu from './components/Menu'
import Burger from './components/Burger'
import Header from './components/Header'
import Background from './components/Background'
import Albums from 'containers/albums'

const year = new Date().getFullYear()

const siteInfo = {
  author: 'Pavlo Mokshyn',
  siteName: 'Albums Info',
  thumbnailsPerPage: 9,
  year
}

export const SiteInfoContext = React.createContext()

const App = () => {

    const [open, setOpen] = useState(false)

    return (
      <SiteInfoContext.Provider value={siteInfo}>
          <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Header />
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
              <Background />
              <Albums />
          </ThemeProvider>
      </SiteInfoContext.Provider>
    )
}

export default App;
