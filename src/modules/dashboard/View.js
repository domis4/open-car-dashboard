//@flow
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import DashboardApp from '../../components/dashboard-app'
import musicImage from '../music-player/icon.png'
import settingsIcon from '../settings/icon.png'
import googleMapsIcon from '../google-maps/icon.png'

type propTypes = {
  classes: {},
  history: {},
}

const View = ({ classes, history }: propTypes) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <DashboardApp image={musicImage} title="Music" callback={() => history.push('/music')} />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <DashboardApp image={settingsIcon} title="Settings" callback={() => history.push('/settings')} />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <DashboardApp image={googleMapsIcon} title="Google Maps" callback={() => history.push('/maps')} />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <DashboardApp />
        </Paper>
      </Grid>
    </Grid>
  </div>
)

export default View
