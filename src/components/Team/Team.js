import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const Team = ({ teamMembers }) => (
  <Grid container spacing={16}>
    {teamMembers.map((teamMember, index) => (
      <Grid key={index} item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="headline">{teamMember.name}</Typography>
            <Typography>{teamMember.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default Team;
