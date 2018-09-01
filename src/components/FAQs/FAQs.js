import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

const FAQs = ({ faqs, classes }) => (
  <React.Fragment>
    <Typography variant="headline">FAQs</Typography>

    {faqs.map((faq, index) => (
      <Paper key={index} className={classes.paper}>
        <Typography variant="headline">{faq.question}</Typography>
        <Typography>{faq.answer}</Typography>
      </Paper>
    ))}
  </React.Fragment>
);

export default withStyles(styles)(FAQs);
