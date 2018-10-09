const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow()
  process.env.NODE_ENV === 'production' && mainWindow.maximize() 
  process.env.NODE_ENV === 'production' && mainWindow.setFullScreen(true)
  mainWindow.loadFile('./dist-bundle/index.html')
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

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
