//@flow
import React from 'react'
import Zoom from '@material-ui/core/Zoom'
import List from './lists'

type propTypes = {
  classes: {},
  tabValue?: string,
  setTabValue: string => void,
}

const View = ({ classes, tabValue = 'lists', setTabValue }: propTypes) => (
  <Zoom in={true}>
    <div className={classes.root}>
      <List />
    </div>
  </Zoom>
)

export default View
