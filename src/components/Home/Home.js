import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HomeVideo from "./HomeVideo";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    height: "100%"
  },
  movie: {
    marginBottom: theme.spacing.unit * 2
  }
});

const Home = ({ classes }) => (
  <React.Fragment>
    <HomeVideo showImage className={classes.movie} />
    <Grid container spacing={16} alignItems="stretch">
      <Grid item xs={12}>
        <Typography className={classes.titleText} variant="display1">
          Join us for TEDxIWU in February 2019
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline">Interested in speaking?</Typography>
            <Typography>
              Sign up to be notified when our speaker application goes live in
              September.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYNQYXHtXK2FPcH9VfAvLcj8eNanz8m89BTcjO12cXaV10vg/viewform?usp=sf_link"
              size="small"
              color="secondary"
            >
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline">
              Want to make sure you don't miss out on tickets?
            </Typography>
            <Typography>
              Sign up to be notified when tickets are available.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbqS7DUlACmNRudR0eMgcIoy-3KBEMprzFgNAbYlmE4wM4vw/viewform?usp=sf_link"
              size="small"
              color="secondary"
            >
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="display1">Learn More About TEDx</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline">
              About TEDx, x = independently organized event
            </Typography>
            <Typography>
              In the spirit of ideas worth spreading, TEDx is a program of
              local, self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TED Talks video and live
              speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events
              are self-organized. (Subject to certain rules and regulations.)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline">About TED</Typography>
            <Typography>
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world's leading thinkers and
              doers to speak for 18 minutes or less. Many of these talks are
              then made available, free, at TED.com. TED speakers have included
              Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
              Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan
              and Daniel Kahneman.
            </Typography>

            <Typography>
              The annual TED Conference takes place each spring in Vancouver,
              British Columbia. TED's media initiatives include TED.com, where
              new TED Talks are posted daily; the Open Translation Project,
              which provides subtitles and interactive transcripts as well as
              translations from volunteers worldwide; the educational initiative
              TED-Ed. TED has established the annual TED Prize, where
              exceptional individuals with a wish to change the world get help
              translating their wishes into action; TEDx, which supports
              individuals or groups in hosting local, self- organized TED-style
              events around the world, and the TED Fellows program, helping
              world-changing innovators from around the globe to amplify the
              impact of their remarkable projects and activities.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default withStyles(styles)(Home);
