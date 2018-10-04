//@flow
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive'
import NetworkCell from '@material-ui/icons/NetworkCell'
import NetworkWifi from '@material-ui/icons/NetworkWifi'
import Bluetooth from '@material-ui/icons/Bluetooth'
import Settings from '@material-ui/icons/Settings'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

type propTypes = {
  classes: {},
  tabValue?: string,
  setTabValue: string => void,
}

let id = 0
function createData(title, children) {
  id += 1
  return { id, title, children }
}

const View = ({ classes, tabValue, setTabValue }: propTypes) => (
  <Paper className={classes.root}>
    <Typography component="h1" className={classes.text}>
      Bluetooth
    </Typography>
    <Table className={classes.table}>
      <TableBody>
        {[
          createData(
            <span>
              <AirplanemodeActive className={classes.icon} />
              {'Airplane Mode'}
            </span>
          ),
          createData(
            <span>
              <NetworkWifi className={classes.icon} />
              {'Wi-Fi'}
            </span>
          ),
          createData(
            <span>
              <Bluetooth className={classes.icon} />
              {'Bluetooth'}
            </span>
          ),
          createData(
            <span>
              <NetworkCell className={classes.icon} />
              {'Cellular'}
            </span>
          ),
          createData(
            <span>
              <Settings className={classes.icon} />
              {'General'}
            </span>
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
