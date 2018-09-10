import { compose, withState, lifecycle } from 'recompose'

export default compose(
  withState('tabValue', 'setTabValue', 'lists'),
  lifecycle({
    componentDidMount() {
      console.log('mounted')
    },
  })
)
