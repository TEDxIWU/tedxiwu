import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
  },
})

const Speakers = ({ classes }) => (
  <React.Fragment>
    <Typography variant="headline">Interested in speaking?</Typography>
    <Typography>
      Applications for 2019 speakers are now being accepted. All IWU faculty,
      staff, students and alumni are welcome to apply. Applications are due by
      Wednesday, September 12, 2018.
    </Typography>
    <Button
      href="https://docs.google.com/forms/d/e/1FAIpQLSfjR5TxiGAE1uUDKivktBZS0tl2Shligt95NDweagLpr-enJQ/viewform?usp=sf_link"
      variant="raised"
      color="secondary"
      className={classes.button}
    >
      Apply Now
    </Button>
  </React.Fragment>
)

export default withStyles(styles)(Speakers)
