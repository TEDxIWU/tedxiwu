import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Img from 'gatsby-image'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  divider: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
}))

const Speaker = ({ speaker }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card>
            {speaker.headshot && (
              <Img
                alt={`Picture of ${speaker.name}`}
                fluid={speaker.headshot.fluid}
              />
            )}
          </Card>
        </Grid>
        <Grid item xs sm>
          <Typography variant="h4" component="h2">{speaker.name}</Typography>
          <Typography variant="h6" component="h3">{speaker.talkTitle}</Typography>
          <div
            dangerouslySetInnerHTML={{
              __html: speaker.biography.childMarkdownRemark.html,
            }}
          />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </React.Fragment>
  )
}

export default Speaker
