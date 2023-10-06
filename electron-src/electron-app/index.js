const path = require("path");

// ready 事件
require(path.join(__dirname, 'on-ready/index.js'))


// window-all-closed 事件
require(path.join(__dirname, 'on-window-all-closed.js'))

// activate 事件
require(path.join(__dirname, 'on-activate.js'))