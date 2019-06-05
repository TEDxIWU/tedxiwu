import Layout from './AppLayout'
import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { responsiveFontSizes } from '@material-ui/core/styles';
import tedTheme from '../../theme'

const capitalizeFirstLetter = string => {
  let newString = string.charAt(0).toUpperCase() + string.slice(1)
  if (newString[newString.length - 1] === '/') {
    newString = newString.substring(0, newString.length - 1)
  }

  return newString
}

const AppLayoutContainer = ({ location: { pathname }, children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerClose = () => {
    setMobileOpen(false)
  }

  const handleDrawerOpen = () => {
    setMobileOpen(true)
  }

  const theme = responsiveFontSizes(tedTheme)
  const pageTitle = capitalizeFirstLetter(pathname.substring(1))
  const hideMenu = pathname === '/'

  return (
    <ThemeProvider theme={theme}>
      <Layout
        pageTitle={pageTitle}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        mobileOpen={mobileOpen}
        hideMenu={hideMenu}
      >
        {children}
      </Layout>
    </ThemeProvider>
  )
}

export default AppLayoutContainer
