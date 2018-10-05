import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import View from './View'
import Data from './Data'
import Logic from './Logic'
import styles from './styles'

export default compose(
  Data,
  Logic,
  withStyles(styles)
)(View)
