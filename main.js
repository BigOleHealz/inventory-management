const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const isDev = require('electron-is-dev');

let mainWindow;


function createWindow() {
  
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  
  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, 'frontend/build/index.html')}`;

  mainWindow.loadURL(startUrl);
}

function startBackend() {
  const backendProcess = spawn('python', ['backend/app.py'], {
    shell: true,
    stdio: 'inherit',
  });

  backendProcess.on('close', (code) => {
    console.log(`Backend process exited with code ${code}`);
  });
}

app.on('ready', () => {
  createWindow();
  startBackend(); // Start the Flask backend
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }

  // Kill backend server when Electron app is closed
  exec('pkill -f "python backend/app.py"');
});


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});