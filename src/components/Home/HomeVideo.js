import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    textAlign: 'center',
    height: `calc(56vw - ${theme.spacing.unit * 3}px)`,
    position: 'relative',
  },
  video: {
    position: 'absolute',
    left: theme.spacing.unit * -3,
    top: theme.spacing.unit * -3,
    margin: 'auto',
    width: '100vw',
    height: '56vw',
    overflow: 'hidden',
  },
  button: {
    position: 'absolute',
    width: '100%',
    textAlgin: 'center',
    top: '22vw',
  },
})

const HomeVideo = ({
  classes,
  buttonText,
  buttonOnClick,
  className,
  showImage,
}) => (
  <div className={classNames(classes.root, className)}>
    {showImage && (
      <div className={classes.video}>
        <img alt="heroImage" style={{ width: '100%' }} src="heroimage.jpg" />
      </div>
    )}
    {!showImage && (
      <iframe
        className={classes.video}
        id="ytplayer"
        width="x"
        height="y"
        type="text/html"
        title="homeVideo"
        src={`https://www.youtube.com/embed/WQoRT964ppM?playsinline=1&disablekb=1&autoplay=1&loop=1&mute=1&controls=0&origin=${
          window.location
        }`}
        frameborder="0"
      />
    )}
    <div className={classes.video} />
    {buttonText && (
      <div className={classes.button}>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={buttonOnClick}
        >
          {buttonText}
        </Button>
      </div>
    )}
  </div>
)

export default withStyles(styles)(HomeVideo)
