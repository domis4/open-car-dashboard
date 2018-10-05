import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import View from './View'
import Data from './Data'
import styles from './styles'

export default compose(
  Data,
  withStyles(styles)
)(View)
