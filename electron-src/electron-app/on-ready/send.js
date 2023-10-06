// 触发渲染事件
const server_config = require( "../../server/config/index.js" )

const send = (mainWindow)=>{
    mainWindow.webContents.send('messageFromMain', server_config)
}

module.exports = send