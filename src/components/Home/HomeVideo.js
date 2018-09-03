import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    textAlign: "center",
    height: `calc(56vw - ${theme.spacing.unit * 3}px)`,
    position: "relative"
  },
  video: {
    position: "absolute",
    left: theme.spacing.unit * -3,
    top: theme.spacing.unit * -3,
    margin: "auto",
    width: "100vw",
    height: "56vw"
  },
  button: {
    position: "absolute",
    width: "100%",
    textAlgin: "center",
    top: "10vw",
    zindex: 9999
  }
});

const HomeVideo = ({ classes, buttonText, buttonOnClick }) => (
  <div className={classes.root}>
    <iframe
      className={classes.video}
      id="ytplayer"
      width="x"
      height="y"
      type="text/html"
      src={`https://www.youtube.com/embed/WQoRT964ppM?playsinline=1&disablekb=1&autoplay=1&loop=1&mute=1&controls=0&origin=${
        window.location
      }`}
      frameborder="0"
    />
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
);

export default withStyles(styles)(HomeVideo);
