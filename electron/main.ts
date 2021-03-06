// Modules to control application life and create native browser window

import { app, BrowserWindow, protocol } from 'electron'
import createProtocol from "./createProtocol";
import path from 'path'

const customProtocol = "yourprotocolname"
const isDevelopment = !app.isPackaged
protocol.registerSchemesAsPrivileged([{ scheme: customProtocol, privileges: { secure: true, standard: true } }])

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1"

async function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    if(isDevelopment) {
        await mainWindow.loadURL('http://localhost:8069')
    } else {
        await mainWindow.loadURL(`${customProtocol}://./index.html`)
    }

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
    if(!isDevelopment) createProtocol(customProtocol)

    await createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.