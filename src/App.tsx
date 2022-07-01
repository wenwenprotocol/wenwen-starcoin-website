import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './views/Home'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import TopBar from './components/TopBar'
import MobileMenu from './components/MobileMenu'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(
    () => {
      setMobileMenu(false)
    },
    [setMobileMenu]
  )

  const handlePresentMobileMenu = useCallback(
    () => {
      setMobileMenu(true)
    },
    [setMobileMenu]
  )

  return (
    <Providers>
      <Router>
        <Helmet 
          titleTemplate="WENWEN Protocol - %s"
          defaultTitle="WENWEN Protocol - Decentralized Stablecoin with an Algorithmic Central Bank"
        />
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {  
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>
  )
}

export default App
