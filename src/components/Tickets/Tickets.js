import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2
  }
});

const Tickets = ({ classes }) => (
  <React.Fragment>
    <Typography variant="headline">
      Want to make sure you don't miss out on tickets?
    </Typography>
    <Typography>Sign up to be notified when tickets are available.</Typography>
    <Button
      href="https://docs.google.com/forms/d/e/1FAIpQLSfbqS7DUlACmNRudR0eMgcIoy-3KBEMprzFgNAbYlmE4wM4vw/viewform?usp=sf_link"
      variant="raised"
      color="secondary"
      className={classes.button}
    >
      Sign Up
    </Button>
  </React.Fragment>
);

export default withStyles(styles)(Tickets);
