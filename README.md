# 介绍

这是一个使用 electron 封装了语雀【我的主页】的项目，主要用来在linux平台记录笔记时独立启动应用而不是打开一个网站。

# 安装

```bash
npm install a630140621/electronic-yuque -g
# 启动
yuque
```

# 可能的问题

## 使用淘宝镜像安装electron失败

设置环境变量指定你要安装的版本；

```bash
export ELECTRON_CUSTOM_DIR="8.1.1"
npm install electron --save-dev
```

https://www.electronjs.org/docs/tutorial/installation#mirror
