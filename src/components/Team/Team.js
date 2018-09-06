import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  titleText: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  card: {
    height: "100%"
  }
});

const Team = ({ teamMembers, classes }) => (
  <Grid container spacing={16} alignItems="stretch">
    {teamMembers.map((teamMember, index) => (
      <Grid key={index} item xs={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline">{teamMember.name}</Typography>
            <Typography>{teamMember.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(Team);
