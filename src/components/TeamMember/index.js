import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import Img from 'gatsby-image'

const styles = theme => ({
  card: {
    height: '100%',
  },
})

const TeamMember = ({ teamMember, classes }) => (
  <Card className={classes.card}>
    {teamMember.picture && (
      <Img
        alt={`Picture of ${teamMember.name}`}
        fluid={teamMember.picture.fluid}
      />
    )}
    <CardContent>
      <Typography variant="h5">{teamMember.name}</Typography>
      <Typography>{teamMember.title}</Typography>
    </CardContent>
  </Card>
)

export default withStyles(styles)(TeamMember)
