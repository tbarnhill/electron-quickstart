const {app, BrowserWindow,Menu, MenuItem, shell} = require('electron')
const path = require('node:path')
app.on('ready', createWindow)

function createWindow () {
    let win = new BrowserWindow({
        width: 1200, 
        height: 720, 
        icon:'icon.ico', 
        autoHideMenuBar: true,  
        webPreferences: {preload:path.join(__dirname, 'preload.js'),nodeIntegration:true}
    })
    win.loadFile('index.html')
    win.on('closed', () => {win = null})
    app.on('window-all-closed', () => { app.quit()})
	
	 const menuTemplate = [
        {
			    accelerator: 'CmdOrCtrl+D',
			    click: () => {win.webContents.openDevTools()},
                label:"dev tools"
        },
		{	
			    accelerator: 'CmdOrCtrl+R',
			    click: () => {win.loadFile('index.html')},
                label:"reload"
        },
		{	
                accelerator: 'CmdOrCtrl+Z',
			    click: () => {
                    shell.openItem(app.getAppPath())
                },
                label:"open app dir"
        }
        
    ];
    
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));


}



      
  
  

  

  
  