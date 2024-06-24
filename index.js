const electron  = require('electron');
const {app, BrowserWindow, ipcMain} = electron;

let bw,bw2;
app.on('ready',()=>{
    bw = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    bw2 = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    bw.loadURL(`file://${__dirname}/index.html`)
    bw2.loadURL(`file://${__dirname}/index2.html`)
})

ipcMain.on('clicked',(_,person)=>{
    bw.webContents.send('sodi',person + Math.random()*10)
})

ipcMain.on('pleaseCap',(_,num1,num2)=> {
    bw2.webContents.send('capDone', parseInt(num1)+parseInt(num2))
})