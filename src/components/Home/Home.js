import ContentCard from '../ContentCard'
import Grid from '@material-ui/core/Grid'
import HomeBanner from './HomeBanner'
import HomeVideo from './HomeVideo'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
  },
  movie: {
    marginBottom: theme.spacing(2),
  },
}))

const Home = ({ content }) => {
  const classes = useStyles()
  const bottomContent = content.slice(2)

  return (
    <React.Fragment>
      <HomeVideo showImage className={classes.movie} />
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12}>
          <Typography className={classes.titleText} variant="h2">
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
          <Grid key={item.id} item xs={12}>
            <ContentCard content={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}

export default Home
