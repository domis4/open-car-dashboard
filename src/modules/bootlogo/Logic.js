import { compose, lifecycle, withState } from 'recompose'

const withLifecycle = lifecycle({
  componentDidMount() {
    const { setFadeIn, callback, setShowElement } = this.props

    setTimeout(() => {
      setFadeIn(false)
      setTimeout(() => setShowElement(false), 600)
      callback && setTimeout(() => callback(), 600)
    }, 2000)
  },
})

export default compose(
  withState('fadeIn', 'setFadeIn', true),
  withState('showElement', 'setShowElement', true),
  withLifecycle
)
