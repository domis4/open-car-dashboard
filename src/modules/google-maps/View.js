//@flow
import React from 'react'
import Zoom from '@material-ui/core/Zoom'

type propTypes = {
  classes: {},
  tabValue?: string,
  setTabValue: string => void,
}

const View = ({ classes, tabValue = 'lists', setTabValue }: propTypes) => (
  <Zoom in={true}>
    <iframe className={classes.iframe} src="http://maps.openrouteservice.org" scrolling="no" />
  </Zoom>
)

export default View
