import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Helmet from 'react-helmet'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Navigation from '../Navigation'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import base from './base.css'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
  },
  appBarHide: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    height: '100%',
  },
  drawerPaper: {
    width: drawerWidth,
    height: '100%',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  footer: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
  },
  contentfulImage: {
    width: '150px',
  },
}))

const Layout = ({
  mobileOpen,
  handleDrawerOpen,
  handleDrawerClose,
  pageTitle,
  hideMenu = false,
  children,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Helmet htmlAttributes={{ lang: 'en' }} />
      <AppBar
        color="default"
        className={classNames(
          classes.appBar,
          !hideMenu ? classes.appBarHide : undefined
        )}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={!hideMenu ? classes.navIconHide : undefined}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h5" color="inherit" noWrap>
            <span style={{ color: '#e62b1e' }}>TEDx</span>
            IWU {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      {!hideMenu && (
        <React.Fragment>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerClose}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <Navigation onClick={handleDrawerClose} />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Navigation onClick={handleDrawerClose} />
            </Drawer>
          </Hidden>
        </React.Fragment>
      )}
      {hideMenu && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Navigation forceShowLogo={hideMenu} onClick={handleDrawerClose} />
        </Drawer>
      )}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <div className={classes.footer}>
          <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
            <img
              src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
              alt="Powered by Contentful"
              className={classes.contentfulImage}
            />
          </a>
        </div>
      </main>
    </div>
  )
}
export default Layout
