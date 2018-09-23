import { compose, withState } from 'recompose'

export default compose(withState('tabValue', 'setTabValue', 'lists'))
