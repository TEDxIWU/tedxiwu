import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ContentCard from '../ContentCard'

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
  },
})

const Tickets = ({ classes, content }) => (
  <React.Fragment>
    <ContentCard content={content} />
  </React.Fragment>
)

export default withStyles(styles)(Tickets)
