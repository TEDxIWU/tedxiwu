import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import EventSeatIcon from "@material-ui/icons/EventSeat";
import MicIcon from "@material-ui/icons/Mic";
import PeopleIcon from "@material-ui/icons/People";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import HomeIcon from "@material-ui/icons/Home";

import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar
  },
  title: {
    paddingTop: theme.spacing.unit * 3
  },
  list: {
    padding: "0%"
  }
});

const Navigation = ({ classes, onClick }) => (
  <React.Fragment>
    <div className={classes.toolbar}>
      <Typography align="center" className={classes.title} variant="title">
        TEDxIWU
      </Typography>
    </div>
    <Divider />
    <List className={classes.list}>
      <ListItem button onClick={onClick} component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        Home
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/Tickets">
        <ListItemIcon>
          <EventSeatIcon />
        </ListItemIcon>
        Get Tickets
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/Speakers">
        <ListItemIcon>
          <MicIcon />
        </ListItemIcon>
        Our Speakers
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/Team">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        Our Team
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/FAQs">
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        FAQs
      </ListItem>
    </List>
  </React.Fragment>
);

export default withStyles(styles, { withTheme: true })(Navigation);
