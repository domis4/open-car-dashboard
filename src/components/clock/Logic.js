import { compose, lifecycle, withState } from 'recompose'
import moment from 'moment'

const withLifecycle = lifecycle({
  componentDidMount() {
    const { setTime } = this.props
    const updateClock = () =>
      setTimeout(() => {
        const now = moment().format('HH:mm')
        setTime(now)
        updateClock()
      }, 1000)
    updateClock()
  },
})

export default compose(
  withState('time', 'setTime', moment().format('HH:mm')),
  withLifecycle
)
