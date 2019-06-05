import Divider from '@material-ui/core/Divider'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import Hidden from '@material-ui/core/Hidden'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'gatsby'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MicIcon from '@material-ui/icons/Mic'
import PeopleIcon from '@material-ui/icons/People'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
  },
  title: {
    paddingTop: theme.spacing(2),
    display: 'block',
  },
  list: {
    padding: '0%',
  },
}))

const Navigation = ({onClick, forceShowLogo }) => {
  const classes = useStyles()

  return (
  <React.Fragment>
    <div className={classes.toolbar}>
      <Hidden mdUp={!forceShowLogo}>
        <Typography align="center" className={classes.title} variant="h5" component="span">
          <span style={{ color: '#e62b1e' }}>TEDx</span>
          IWU
        </Typography>
      </Hidden>
    </div>
    <Divider />
    <List className={classes.list} component="nav">
      <ListItem button onClick={onClick} component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        Home
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/tickets">
        <ListItemIcon>
          <EventSeatIcon />
        </ListItemIcon>
        Get Tickets
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/speakers">
        <ListItemIcon>
          <MicIcon />
        </ListItemIcon>
        Our Speakers
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/team">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        Our Team
      </ListItem>
      <ListItem button onClick={onClick} component={Link} to="/faq">
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        FAQs
      </ListItem>
    </List>
  </React.Fragment>
)}

export default Navigation
