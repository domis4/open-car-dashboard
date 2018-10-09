import React from 'react'
import Zoom from '@material-ui/core/Zoom'

const View = ({ classes, tabValue = 'lists', setTabValue }) => (
  <Zoom in={true}>
    <iframe className={classes.iframe} src="http://maps.openrouteservice.org" scrolling="no" />
  </Zoom>
)

export default View
