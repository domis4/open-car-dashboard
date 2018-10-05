import { compose, lifecycle, withState } from 'recompose'

const withLifecycle = lifecycle({
  componentDidMount() {
    const { setFadeIn, callback, setShowElement, pathname } = this.props
    const timeout = pathname === '/' ? 2000 : 0

    setTimeout(() => {
      setFadeIn(false)
      setTimeout(() => setShowElement(false), 600)
      callback && setTimeout(() => callback(), 600)
    }, timeout)
  },
})

export default compose(
  withState('fadeIn', 'setFadeIn', true),
  withState('showElement', 'setShowElement', true),
  withLifecycle
)
