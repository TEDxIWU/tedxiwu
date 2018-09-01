import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";

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
  },
  icon: {
    marginRight: theme.spacing.unit * 3
  }
});

const Navigation = ({ classes, onClick }) => (
  <React.Fragment>
    <Divider />
    <List className={classes.list}>
      <ListItem button onClick={onClick} component={Link} to="/">
        <ListItemIcon className={classes.icon}>
          <HomeIcon />
        </ListItemIcon>
        Home
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/Tickets">
        <ListItemIcon className={classes.icon}>
          <EventSeatIcon />
        </ListItemIcon>
        Get Tickets
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/Speakers">
        <ListItemIcon className={classes.icon}>
          <MicIcon />
        </ListItemIcon>
        Our Speakers
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/Team">
        <ListItemIcon className={classes.icon}>
          <PeopleIcon />
        </ListItemIcon>
        Our Team
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/FAQs">
        <ListItemIcon className={classes.icon}>
          <QuestionAnswerIcon />
        </ListItemIcon>
        FAQs
      </ListItem>
    </List>
  </React.Fragment>
);

export default withStyles(styles, { withTheme: true })(Navigation);
