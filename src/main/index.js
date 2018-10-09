import { app, BrowserWindow } from 'electron'
import listeners from '../natives/listeners'
import * as path from 'path'
import { format as formatUrl } from 'url'

let mainWindow = null

const isDevelopment = process.env.NODE_ENV !== 'production'

function createWindow() {
  mainWindow = new BrowserWindow({})
  !isDevelopment && mainWindow.maximize()
  !isDevelopment && mainWindow.setFullScreen(true)
  if (isDevelopment) {
    mainWindow.webContents.openDevTools()
  }

  if (isDevelopment) {
    mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    mainWindow.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      })
    )
  }
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
  listeners()
})

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})

export default mainWindow
