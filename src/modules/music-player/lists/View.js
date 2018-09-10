//@flow
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

type propTypes = {
  classes: {},
  tabValue?: string,
  setTabValue: string => void,
}

let id = 0
function createData(name, children) {
  id += 1
  return { id, name, children }
}

const rows = [
  createData('Playlist 1'),
  createData('Playlist 2'),
  createData('Playlist 3'),
  createData('Playlist 4'),
  createData('Playlist 5'),
]

const View = ({ classes, tabValue, setTabValue }: propTypes) => (
  <Paper className={classes.root}>
    <Typography component="h1" className={classes.text}>
      Playlists
    </Typography>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => {
          return (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

export default View
