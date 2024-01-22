# Kminder Mindmap Joplin Plugin

[English](#) [中文](https://github.com/calandradas/Kminder-Mindmap-Joplin-Plugin/blob/main/README_zh.md)

Kminder Mindmap Joplin Plugin is a mindmap plug-in built on Baidu Brain Map opensource project Kity Minder.

Forked from xeden3's joplin-plugin-kity-minder project and made several modifications.

![demo](demo.gif "demo")

## Features

* Supports export JSON, MD, and PNG, and import JSON and MD.

* Now v0.8.6 Supports import **Xmind and MindManager with their images, links, notes, markers, lables, priority, progress**.

* Since v0.8.2 supports loading local images into mindmap.

* i18n now include English, 简体中文, 繁體中文, 日本語, Español, Français and Deutsch, in Tools->Options->Plugins->Kminder Mindmap

* Supports switching between different languages.

* Removed the native Kity Minder Baidu image search function, and internationalized all the text. 

* Adjusted part of the UI to make it more in line with operating habits.

## Roadmap

* Others

## Thanks

Thanks to the following teams and individuals for their excellent work:

* Baidu FEX team and Kity Minder's open source project [kity-minder](https://github.com/fex-team/kityminder-editor.git)

* wythe0102provided the localized Kity Minder project [local-kity-minder](https://github.com/wythe0102/local-kity-minder)

* xeden3's Joplin plug-in project build this project foundation [joplin-plugin-kity-minder](https://github.com/xeden3/joplin-plugin-kity-minder)

## Compiling and Installation

```bash
git clone https://github.com/calandradas/Kminder-Mindmap-Joplin-Plugin.git
npm install -g yo
npm install -g generator-joplin
yo joplin --update
npm run dist
```

Then follow the second step of the installation from file.

## Installation from file

1.Download the latest version of calandra.kminder.joplin.zip file from https://github.com/calandradas/Kminder-Mindmap-Joplin-Plugin/releases and uncompress it.

2.Open Joplin's "Tools->Options->Plugins" menu, click on "Manage your plugins", select "Install from file", and select the corresponding calandra.kminder.joplin.jpl to install it.

## How to use Kminder Mindmap Plugin

After the installation is complete, create a new note, and a brain icon will appear in the upper right corner of Joplin. Click it to enter the mind map editing mode. To edit an existing mindmap, you need to be in markdown mode. When the mouse is placed on the mindmap, an Edit icon will appear. Click it to enter the mind map editing mode.

List of commonly used shortcut keys:
|   Key  |  Performing   |
| --- | --- |
|tab  | New Child Item  |
|shift+tab |New Parent Item|
|enter |New Sibling Item|
|alt+up  | Up Item|
|alt+down  | Down Item|
|ctrl+scroll |Zoom In/Out|
|ctrl+c/ctrl+v |Copy/New Child|
|ctrl+z/ctrl+y |Undo/Redo|

Other shortcut keys can be seen by right-clicking on items.

## ☕️ Buy Me a Coffee

If you are interested in the project, you can ⭐STAR️⭐️ it~

<a href="https://www.buymeacoffee.com/calandradu5" target="_blank"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=markmind&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" target="_blank" ></a>
