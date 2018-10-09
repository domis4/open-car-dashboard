const { app, BrowserWindow } = require('electron')
const listeners = require('./natives/listeners')
let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow()
  process.env.NODE_ENV === 'production' && mainWindow.maximize()
  process.env.NODE_ENV === 'production' && mainWindow.setFullScreen(true)
  mainWindow.loadFile('./dist-bundle/index.html')
  mainWindow.openDevTools()
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

module.exports = { mainWindow }
