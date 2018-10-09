import React from 'react'
import { Provider } from 'react-redux'
import { store, history } from '../../create-store'
import { compose } from 'recompose'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import styles from './styles'
import Bootlogo from '../bootlogo'
import Dashboard from '../dashboard'
import MainMenu from '../main-menu'
import MusicPlayer from '../music-player'
import Settings from '../settings'
import Maps from '../google-maps'
import Notifications from '../notifications'

function getTheme(theme) {
  return createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: '#000',
        },
      },
      MuiSvgIcon: {
        root: {
          color: '#fff',
        },
      },
    },
    palette: {
      type: theme.paletteType,
      background: {
        default: theme.paletteType === 'light' ? '#000' : '#fff',
      },
    },
  })
}

const theme = getTheme({
  paletteType: 'dark',
})

const App = ({ classes, isBootIconVisible, setBootIconVisible }) => (
  <Provider {...{ store }}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Bootlogo callback={() => setBootIconVisible(false)} />
        {!isBootIconVisible && (
          <Fade {...{ in: !isBootIconVisible, timeout: 600, className: classes.root }}>
            <div className={classes.root}>
              <div className={classes.app}>
                <MainMenu history={history} />
                <main className={classes.content}>
                  <Notifications />
                  <Switch className={classes.router}>
                    <Route exact path="/" component={Dashboard} history={history} />
                    <Route path="/music/:tab?" component={MusicPlayer} history={history} />
                    <Route path="/settings" component={Settings} history={history} />
                    <Route path="/maps" component={Maps} history={history} />
                  </Switch>
                </main>
              </div>
            </div>
          </Fade>
        )}
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
)

export default compose(withStyles(styles))(App)
