// 创建窗口
const { app } = require('electron');

const createWindow = async () => {
    const mainWindow = require( "./createWindow.js" )
    await require( "./loadPage.js" )(mainWindow)
    require( "./openDevTools.js" )(mainWindow)
    require( "./send.js" )(mainWindow)
    require( "./tray.js" )(mainWindow)
    require( "./close.js" )(mainWindow)
    require( "./app-on-second-instance.js" )(mainWindow)
};

app.on('ready', createWindow);



