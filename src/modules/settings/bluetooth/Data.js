import { withStateHandlers } from 'recompose'

export default withStateHandlers(
  () => ({ isBluetoothVisible: false }),
  ({ isScanning }) => ({
    handleBluetoothScanToggle: ({ isBluetoothVisible }) => () => {},
  })
)
