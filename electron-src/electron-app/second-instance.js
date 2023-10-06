// 当第二个实例启动时，通过窗口的方法进行处理
const { app }  = require('electron')
app.on('second-instance', (event, commandLine, workingDirectory) => {
    if (win) {
        if (win.isMinimized()) {
            win.restore()
        }
        win.focus()
    }
})