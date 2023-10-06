/* 加载页面 */

const { app } = require('electron');
const path = require('path');


const loadPage = async (mainWindow)=>{
    if (app.isPackaged) {
        await  mainWindow.loadFile(path.resolve(__dirname, "../../../dist/index.html"));
    } else {
        await  mainWindow.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)
    }
}

module.exports = loadPage