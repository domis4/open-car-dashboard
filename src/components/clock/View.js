//@flow
import React from 'react'
import Typography from '@material-ui/core/Typography'

type propTypes = {
  classes: {},
  time: String,
}

const View = ({ classes, time }: propTypes) => (
  <Typography component="p" className={classes.text}>
    {time}
  </Typography>
)

export default View
