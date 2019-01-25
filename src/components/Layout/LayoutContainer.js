import React from 'react'
import Layout from './Layout'

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
    let newString = string.charAt(0).toUpperCase() + string.slice(1)
    if (newString[newString.length - 1] === '/') {
      newString = newString.substring(0, newString.length - 1)
    }

    return newString
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
      <Layout
        pageTitle={pageTitle}
        handleDrawerClose={this.handleDrawerClose}
        handleDrawerOpen={this.handleDrawerOpen}
        mobileOpen={mobileOpen}
        hideMenu={hideMenu}
      >
        {children}
      </Layout>
    )
  }
}

export default AppLayoutContainer
