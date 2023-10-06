/* 关闭页面事件 */

const close = (mainWindow)=>{
    // 当点击关闭按钮事件
    mainWindow.on('close', (e) => {
        e.preventDefault();  // 阻止退出程序
        mainWindow.hide();    // 隐藏主程序窗口
    })
}

module.exports = close