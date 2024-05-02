const { contextBridge } = require('electron')
let fs = require('fs-extra')
console.log('preload script')
contextBridge.exposeInMainWorld('imports', {
    fs:fs 
})