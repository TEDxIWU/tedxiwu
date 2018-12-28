import React from 'react'
import Layout from './Layout'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../../theme'

class AppLayoutContainer extends React.Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false })
  }

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true })
  }

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const { mobileOpen } = this.state
    const {
      location: { pathname },
      children,
    } = this.props

    const pageTitle = this.capitalizeFirstLetter(pathname.substring(1))
    const hideMenu = pathname === '/'

    return (
      <MuiThemeProvider theme={theme}>
        <Layout
          pageTitle={pageTitle}
          handleDrawerClose={this.handleDrawerClose}
          handleDrawerOpen={this.handleDrawerOpen}
          mobileOpen={mobileOpen}
          hideMenu={hideMenu}
        >
          {children}
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default AppLayoutContainer
