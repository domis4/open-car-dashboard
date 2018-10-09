import React from 'react'
import Typography from '@material-ui/core/Typography'

const View = ({ classes, time }) => (
  <Typography component="p" className={classes.text}>
    {time}
  </Typography>
)

export default View
