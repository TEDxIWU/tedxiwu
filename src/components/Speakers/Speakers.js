import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2
  }
});

const Speakers = ({ classes }) => (
  <React.Fragment>
    <Typography variant="headline">Interested in speaking?</Typography>
    <Typography>
      Sign up to be notified when our speaker application goes live in
      September.
    </Typography>
    <Button
      href="https://docs.google.com/forms/d/e/1FAIpQLSdYNQYXHtXK2FPcH9VfAvLcj8eNanz8m89BTcjO12cXaV10vg/viewform?usp=sf_link"
      variant="raised"
      color="secondary"
      className={classes.button}
    >
      Sign Up
    </Button>
  </React.Fragment>
);

export default withStyles(styles)(Speakers);
