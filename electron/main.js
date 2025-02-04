const { app, BrowserWindow } = require("electron");

let mainWindow;

app.commandLine.appendSwitch("ignore-certificate-errors");


app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL("https://192.168.33.139:5173");
});
