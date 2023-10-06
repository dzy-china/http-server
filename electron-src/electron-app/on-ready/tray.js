/* 托盘 */


const { app, Tray, Menu} = require('electron');
const path = require('path');

const tray =  (mainWindow)=>{
    // 托盘
    // 1. 设置托盘图标
    const my_tray = new Tray(path.resolve(app.isPackaged?"resources/":"public/", "images/logo.ico"))

    // 2. 设置托盘悬浮时显示文字
    my_tray.setToolTip('本地静态服务器')

    // 3.设置托盘点击事件
    my_tray.on('click',(e)=>{
        mainWindow.isVisible()? mainWindow.hide() : mainWindow.show()
    })

    const tray_menu = Menu.buildFromTemplate([
        {
            label:'显示',
            // 菜单点击事件
            click:()=>{
                mainWindow.show()
            }
        },
        {
            label:'退出',
            // 菜单点击事件
            click:()=>{
                mainWindow.destroy()
                app.quit();
            }
        }
    ])

    // 4.设置托盘右键弹出菜单
    my_tray.setContextMenu(tray_menu)
}

module.exports = tray