import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { Typography } from '@material-ui/core'
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  divider: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 2,
  },
})

const Speaker = ({ speaker, classes }) => (
  <React.Fragment>
    <Grid container spacing={16}>
      <Grid item xs={12} sm={3} md={4} lg={5}>
        <Card>
          {speaker.headshot && (
            <Img
              alt={`Picture of ${speaker.name}`}
              fluid={speaker.headshot.fluid}
            />
          )}
        </Card>
      </Grid>
      <Grid item xs md lg>
        <Typography variant="h4">{speaker.name}</Typography>
        <Typography variant="subtitle2">{speaker.talkTitle}</Typography>
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

export default withStyles(styles)(Speaker)
