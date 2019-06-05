import ContentCard from '../ContentCard'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
  },
}))

const TicketsCard = ({ content }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <ContentCard content={content} component="h2" />
    </React.Fragment>
  )
}

export default TicketsCard
