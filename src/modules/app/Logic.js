import { compose, withState } from 'recompose'

export default compose(withState('isBootIconVisible', 'setBootIconVisible', true))
