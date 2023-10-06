let {
    ipcMain,
    dialog, app
} = require("electron")

const server_config = require( "../server/config/index.js" )
const fs = require("fs");
const path = require("path");

//监听事件
ipcMain.on("toMainProcess",(event,arg)=>{
    // 目录选择对话框
    dialog.showOpenDialog({
        title: '选择目录', // 对话框窗口的标题
        defaultPath: arg, // 对话框的默认展示路径
        buttonLabel:'确认', // 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。
        properties: ['openDirectory']  // 允许选择目录
    }).then(result => {
        if(!result.canceled){
            // 获取新目录路径
            const wwwroot = result.filePaths[0]

            // 向渲染页面发送消息
            event.reply("messageFromMain_dirChange", wwwroot);

            // 改变配置文件
            server_config.wwwroot = wwwroot
            fs.writeFileSync(path.resolve(app.isPackaged?"resources/config":"electron-src/server/config", 'server.config.json'), JSON.stringify(server_config, null, 2));

            // 动态设置环境变量
            process.env.hs_wwwroot = wwwroot
        }
    }).catch(err => {
        console.log(err)
    })


});
