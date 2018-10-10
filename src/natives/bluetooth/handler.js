import { addNotification } from '../../redux/notifications'
import { ipcRenderer } from 'electron'

export const startBluetooth = () => ipcRenderer.send('enable-bluetooth')
export const stopBluetooth = () => ipcRenderer.send('stop-bluetooth')
export const startAutoPairing = () => ipcRenderer.send('start-bluetooth-pairing')
export const stopAutoPairing = () => ipcRenderer.send('stop-bluetooth-pairing')

export default () => {
  startBluetooth()
  startAutoPairing()
  ipcRenderer.on('bluetooth-awaits-pairing', () => {
    addNotification('Incoming Bluetooth Connection')
  })
}
