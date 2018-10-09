import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import ListItem from '@material-ui/core/ListItem'
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive'
import NetworkCell from '@material-ui/icons/NetworkCell'
import NetworkWifi from '@material-ui/icons/NetworkWifi'
import Bluetooth from '@material-ui/icons/Bluetooth'
import Settings from '@material-ui/icons/Settings'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

let id = 0
function createData(title, children) {
  id += 1
  return { id, title, children }
}

const View = ({ classes, callRoute }) => (
  <Paper className={classes.root}>
    <Typography component="h1" className={classes.text}>
      Settings
    </Typography>
    <Table className={classes.table}>
      <TableBody>
        {[
          createData(
            <ListItem button>
              <AirplanemodeActive className={classes.icon} />
              {'Airplane Mode'}
            </ListItem>
          ),
          createData(
            <ListItem button>
              <NetworkWifi className={classes.icon} />
              {'Wi-Fi'}
            </ListItem>
          ),
          createData(
            <ListItem button onClick={() => callRoute('/settings/bluetooth')}>
              <Bluetooth className={classes.icon} />
              {'Bluetooth'}
            </ListItem>
          ),
          createData(
            <ListItem button>
              <NetworkCell className={classes.icon} />
              {'Cellular'}
            </ListItem>
          ),
          createData(
            <ListItem button>
              <Settings className={classes.icon} />
              {'General'}
            </ListItem>
          ),
        ].map(row => {
          return (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell numeric>{row.children}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

export default View
