//@flow
import React from 'react'
import Zoom from '@material-ui/core/Zoom'

type propTypes = {
  classes: {},
  tabValue?: string,
  setTabValue: string => void,
}

const View = ({ classes, tabValue = 'lists', setTabValue }: propTypes) => <Zoom in={true}>asdf</Zoom>

export default View
