import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  root: {
    position: "relative",
    height: "300px",
    width: "100px"
  },
  imageContainer: {
    position: "absolute",
    left: theme.spacing.unit * -3,
    margin: 0,
    padding: 0,
    width: "100vw",
    height: "300px",
    overflow: "hidden"
  },
  image: {
    width: "100%"
  }
});

const HomeBanner = ({ classes, src, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.imageContainer}>
      <img className={classes.image} alt="banner image" src={src} />
    </div>
  </div>
);

export default withStyles(styles)(HomeBanner);
