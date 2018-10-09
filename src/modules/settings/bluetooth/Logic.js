import { compose, withStateHandlers } from 'recompose'

export default compose(
  withStateHandlers({ isBluetoothOn: false }, () => ({
    activateBluetooth: () => () => {
      return { isBluetoothOn: true }
    },
  }))
)
