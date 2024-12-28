import { app, BrowserWindow } from 'electron';
import path from 'path';
import * as dotenv from 'dotenv';
import { isDev } from './util.js';

// Load environment variables
dotenv.config();

// Get DEV_PORT from environment or use a default value
const devPort = parseInt(process.env.DEV_PORT || '6969', 10);

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});

    // Setup HMR for dev mode
    if (isDev()) {
        mainWindow.loadURL(`http://localhost:${ devPort }`);
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-web/index.html'));
    }
});
