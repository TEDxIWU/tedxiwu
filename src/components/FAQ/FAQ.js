import Paper from '@material-ui/core/Paper'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '100%',
  },
}))

const FAQ = ({ faq }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" component="h2">{faq.question}</Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: faq.answer.childMarkdownRemark.html,
        }}
      />
    </Paper>
  )
}

export default FAQ
