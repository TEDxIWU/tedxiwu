import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '300px',
    width: '100px',
  },
  imageContainer: {
    position: 'absolute',
    left: theme.spacing(-3),
    margin: 0,
    padding: 0,
    width: '100vw',
    height: '300px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
  },
}))

const HomeBanner = ({ src, className }) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.imageContainer}>
        <img className={classes.image} alt="banner image" src={src} />
      </div>
    </div>
  )
}

export default HomeBanner
