/* 多开优化处理  */

const {app} = require("electron");

const secondInstance = (mainWindow)=>{

    // 当第二个实例启动时，会向第一个实例发送'second-instance'信号
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (mainWindow) {
            // 如果处于最小化就恢复窗口大小
            if (mainWindow.isMinimized()) {
                mainWindow.restore()
            }
            // 如果处于隐藏(托盘状态)就显示
            if (!mainWindow.isVisible()) {
                mainWindow.show()
            }
            mainWindow.focus()
        }
    })

}

module.exports = secondInstance