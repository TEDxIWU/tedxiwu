import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
  },
})

const FAQ = ({ faq, classes, key }) => (
  <Paper key={key} className={classes.paper}>
    <Typography variant="h4">{faq.question}</Typography>
    <div
      dangerouslySetInnerHTML={{ __html: faq.answer.childMarkdownRemark.html }}
    />
  </Paper>
)

export default withStyles(styles)(FAQ)
