import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import View from './View'
import Logic from './Logic'
import styles from './styles'

export default compose(
  Logic,
  withStyles(styles)
)(View)
