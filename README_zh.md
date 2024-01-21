# Kminder Mindmap Joplin Plugin介绍

[English](https://github.com/calandradas/Kityminder-Mindmap-Joplin-Plugin) [中文](#)


Kminder Mindmap Joplin Plugin基于百度脑图的开源项目Kity Minder构建的Joplin思维导图插件.

从xeden3的joplin-plugin-kity-minder项目fork,做了功能提升.

![demo](demo.gif "demo")

## 功能提升

* 支持json、md、png文件格式的导出，支持json、md、xmind格式的导入。

* 自v0.8.5支持**Xmind格式导入，并且支持代入images, links, notes, markers, lables, priority, progress**。

* 自v0.8.2以后实现本地图片的上传功能。

* 多语言国际化现在支持英语、简体中文、繁體中文、日语、西班牙语、法语、德语, 在工具->选项->插件->Kminder Mindmap下调整。
    
* 支持多语言的切换。

* 去掉原生Kity Minder百度搜索图片功能，并将文字全部国际化。

* 调整了部分UI，看起来更符合操作习惯。

## Roadmap

* 逐步支持Freemind和Mindmanager的文件导入。

*支持Xmind, Freemind和Mindmanager内的图片导入。

* others

## 感谢

在此感谢以下团队和个人的优秀工作:

* FEX团队和Kity Minder的开源项目[kity-minder](https://github.com/fex-team/kityminder-editor.git)

* wythe0102提供的本地化Kity Minder项目[local-kity-minder](https://github.com/wythe0102/local-kity-minder)

* xeden3的Joplin插件项目提供本项目的基础[joplin-plugin-kity-minder](https://github.com/xeden3/joplin-plugin-kity-minder)


## 编译安装

```bash
git clone https://github.com/calandradas/Kityminder-Mindmap-Joplin-Plugin.git
npm install -g yo
npm install -g generator-joplin
yo joplin --update
npm run dist
```

然后按照下面的从文件安装方式第二步操作即可

## 从文件安装

* 1 先通过 https://github.com/calandradas/Kityminder-Mindmap-Joplin-Plugin/releases 下载最新版本的 calandra.kminder.joplin.zip 文件，并解压缩

* 2 打开Joplin的 "工具\选项\插件" 菜单，点击 "管理你的插件"，选择 "从文件安装"，选择对应的 calandra.kminder.joplin.jpl 即可

## 使用

安装完成后，新建笔记，Joplin右上角出现一个大脑图标，点击即可进入脑图编辑模式；

编辑已有mindmap,须在markdown模式下，鼠标放到脑图上会出现Edit标志，点击即可进入脑图编辑模式。

常用快捷键列表：
|   Key  |  Performing   |
| --- | --- |
|tab  |新建Child项  |
|shift+tab |新建父级项|
|enter |新建同级项|
|alt+up  | 升级某项|
|alt+down  |降级某项|
|ctrl+scroll |放大/缩小|
|ctrl+c/ctrl+v |复制/新建子项|
|ctrl+z/ctrl+y |撤销/重做|

其他快捷键右键点击某项条目即可看到

## ☕️ Buy Me a Coffee

If you are interested in the project, you can ⭐STAR️⭐️ it~

<a href="https://www.buymeacoffee.com/calandradu5" target="_blank"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=markmind&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" target="_blank" ></a>
