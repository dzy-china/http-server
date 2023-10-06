// 创建窗口
const { app } = require('electron');

// 单例锁
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
    // 如果不是第一个实例，则退出应用
    app.quit()
} else {
    // 应用程序开始运行
    require('../electron-src/init.js');
    require('../electron-src/electron-app/index.js');
    require('../electron-src/electron-ipcmain/index.js');
    require('../electron-src/server/index.js');
}


