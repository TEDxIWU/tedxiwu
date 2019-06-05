import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Img from 'gatsby-image'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
  },
}))

const TeamMember = ({ teamMember }) => {
  const classes = useStyles()
  
  return (
    <Card className={classes.card}>
      {teamMember.picture && (
        <Img
          alt={`Picture of ${teamMember.name}`}
          fluid={teamMember.picture.fluid}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="h2">{teamMember.name}</Typography>
        <Typography>{teamMember.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default TeamMember
