import { ipcMain } from 'electron'
import { spawn } from 'child_process'

const bluetoothProcess = spawn(`bluetoothctl`)

export default () => {
  ipcMain.on('enable-bluetooth', (event, command) => {
    bluetoothProcess.send('power on')
  })
  ipcMain.on('stop-bluetooth', (event, command) => {
    bluetoothProcess.send('power off')
  })
  ipcMain.on('start-bluetooth-pairing', (event, command) => {
    bluetoothProcess.send('discoverable on')
    bluetoothProcess.send('pairable on')
    bluetoothProcess.send('agent on')
    bluetoothProcess.send('default-agent')
  })
  ipcMain.on('stop-bluetooth-pairing', (event, command) => {
    bluetoothProcess.send('discoverable off')
    bluetoothProcess.send('pairable off')
    bluetoothProcess.send('agent off')
  })
  bluetoothProcess.stdout.on('data', data => {
    // const awaitsPairing = data.toString().match('Authorize service')
    //awaitsPairing && mainWindow.webContents.send('bluetooth-awaits-pairing')
  })
}
