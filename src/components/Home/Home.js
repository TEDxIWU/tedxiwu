import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import HomeVideo from './HomeVideo'
import HomeBanner from './HomeBanner'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import ContentCard from '../ContentCard'

const styles = theme => ({
  card: {
    height: '100%',
  },
  movie: {
    marginBottom: theme.spacing.unit * 2,
  },
})

const Home = ({ classes, content }) => {
  const bottomContent = content.slice(2)
  return (
    <React.Fragment>
      <HomeVideo showImage className={classes.movie} />
      <Grid container spacing={16} alignItems="stretch">
        <Grid item xs={12}>
          <Typography className={classes.titleText} variant="display1">
            Saturday, March 23, 2019
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContentCard content={content[0]} className={classes.card} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContentCard content={content[1]} className={classes.card} />
        </Grid>
        <Grid item xs={12}>
          <HomeBanner src="/banner.jpg" />
        </Grid>
        {bottomContent.map(item => (
          <Grid item xs={12}>
            <ContentCard content={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(Home)
