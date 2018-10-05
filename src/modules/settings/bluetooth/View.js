//@flow
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import CircularProgress from '@material-ui/core/CircularProgress'
import Switch from '@material-ui/core/Switch'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

type propTypes = {
  classes: {},
  callRoute: () => {},
  isBluetoothVisible: boolean,
  handleBluetoothScanToggle: () => void,
  currentlyScanning: boolean,
}

const View = ({ classes, callRoute, isBluetoothVisible, handleBluetoothScanToggle, currentlyScanning }: propTypes) => (
  <Paper className={classes.root}>
    <Typography component="h1" className={classes.text}>
      Bluetooth
    </Typography>
    <Table className={classes.table}>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            {'Bluetooth'}
          </TableCell>
          <TableCell numeric>
            <Switch
              checked={isBluetoothVisible}
              onChange={handleBluetoothScanToggle}
              value="bluetooth"
              color="primary"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Typography component="h2" className={classes.text}>
      {'Visible as xxxxx'}
    </Typography>
    {currentlyScanning && <CircularProgress />}
  </Paper>
)

export default View
