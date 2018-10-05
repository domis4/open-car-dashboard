//@flow
import React from 'react'
import Zoom from '@material-ui/core/Zoom'
import List from './lists'
import Bluetooth from './bluetooth'
import { Route } from 'react-router'

type propTypes = {
  classes: {},
  tabValue?: string,
  setTabValue: string => void,
}

const View = ({ classes, setTabValue }: propTypes) => (
  <Zoom in={true}>
    <div className={classes.root}>
      <Route exact path="/settings" component={List} />
      <Route path="/settings/bluetooth" component={Bluetooth} />
    </div>
  </Zoom>
)

export default View
