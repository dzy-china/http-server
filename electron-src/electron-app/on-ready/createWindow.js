const {app, BrowserWindow} = require("electron");
const path = require("path");
const preload = path.resolve(__dirname, '../../preload.js')

const win = new BrowserWindow({
    width: 1100,
    height: 800,
    // 窗口图标
    icon: path.resolve(app.isPackaged?"resources/":"public/", "images/logo.ico"),
    //渲染进程预设
    webPreferences: {
        // nodeIntegration: true, // 开启在渲染进程中融入node
        // contextIsolation:false, // 关闭上下文隔离
        // enableRemoteModule:true,  // 开启可在渲染进程中直接引入node模块
        sandbox: false, // 开启关闭沙箱模式
        webviewTag:true,  // 开启webview
        preload: preload,
    }
});

module.exports = win