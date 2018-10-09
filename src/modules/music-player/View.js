import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ListIcon from '@material-ui/icons/List'
import FavoriteIcon from '@material-ui/icons/Favorite'
import SettingsIcon from '@material-ui/icons/Settings'
import Zoom from '@material-ui/core/Zoom'
import List from './lists'

const View = ({ classes, tabValue = 'lists', setTabValue }) => (
  <Zoom in={true}>
    <div className={classes.root}>
      <List />
      <BottomNavigation value={tabValue} onChange={(_, value) => setTabValue(value)} className={classes.bottom}>
        <BottomNavigationAction label="Lists" value="lists" icon={<ListIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </div>
  </Zoom>
)

export default View
