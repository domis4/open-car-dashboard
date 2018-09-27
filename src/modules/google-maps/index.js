import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import View from './View'
import styles from './styles'

export default compose(withStyles(styles))(View)
