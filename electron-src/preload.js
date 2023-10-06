
const  { contextBridge ,ipcRenderer, shell}  = require('electron')

// 暴露给渲染进程的数据，通过：window.main获取
contextBridge.exposeInMainWorld('electronAPI',{
    ipcRenderer: ipcRenderer,
    shell: shell,
    'messageFromMain': (callback) => ipcRenderer.on('messageFromMain', callback),
    'messageFromMain_dirChange': (callback) => ipcRenderer.on('messageFromMain_dirChange', callback),
})