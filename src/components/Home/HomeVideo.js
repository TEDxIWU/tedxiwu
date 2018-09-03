import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    textAlign: "center",
    height: "56vw",
    position: "relative"
  },
  video: {
    position: "absolute",
    left: theme.spacing.unit * -3,
    top: theme.spacing.unit * -3,
    margin: "auto",
    width: "100vw",
    height: "56vw"
  }
});

const HomeVideo = ({ classes }) => (
  <div className={classes.root}>
    <iframe
      className={classes.video}
      id="ytplayer"
      width="x"
      height="y"
      type="text/html"
      src={`https://www.youtube.com/embed/WQoRT964ppM?autoplay=1&loop=1&mute=1&controls=0&origin=${
        window.location
      }`}
      frameborder="0"
    />
  </div>
);

export default withStyles(styles)(HomeVideo);
