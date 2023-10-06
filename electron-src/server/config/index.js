
const path = require("path")
const { app } = require('electron');

const server_config_path = app.isPackaged ? path.resolve("resources/config" , 'server.config.json') : "./server.config.json"
module.exports = require( server_config_path )