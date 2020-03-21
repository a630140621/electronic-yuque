const {
    app,
    BrowserWindow,
    shell
} = require('electron');


function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 1350,
        height: 900,
        webPreferences: {
            nodeIntegration: true // 集成 node
        },
        // fullscreen: true,
        icon: "./icon.png",
        autoHideMenuBar: true,
        // show: false
    });

    // 加载 index.html 文件
    // win.loadFile('index.html');

    // 加载网页
    win.loadURL("https://www.yuque.com/lovecrazy");

    // 打开开发者工具
    // win.webContents.openDevTools();

    // 在加载页面时，渲染进程第一次完成绘制时，会发出 ready-to-show 事件； 在此事件后显示窗口将没有视觉闪烁。
    // win.once('ready-to-show', () => {
    //     win.show();
    // });

    win.on('closed', () => {
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// 处理网页内 导致产生新窗口事件
// 主要为点击 <a> 链接在窗口内直接跳转而不是打开新窗口
app.on('web-contents-created', (evt, webContents) => {
    webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url);
    });
});