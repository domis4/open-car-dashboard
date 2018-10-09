import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Clock from '../../components/clock'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import FilterNone from '@material-ui/icons/FilterNone'

const View = ({ classes, history }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <List className={classes.top}>
      <ListItem button className={classes.center} onClick={() => history.push('/')}>
        <ArrowBackIos />
      </ListItem>
      <ListItem button className={classes.center} onClick={() => history.push('/')}>
        <FilterNone />
      </ListItem>
    </List>
    <List className={classes.bottom}>
      <ListItem className={classes.center}>
        <Clock />
      </ListItem>
      <ListItem button className={classes.center} onClick={() => history.push('/')}>
        <div className={classes.apps} />
      </ListItem>
    </List>
  </Drawer>
)

export default View
