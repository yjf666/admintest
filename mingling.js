/**
 * npm
 * 定义：包管理工具
 * 作用：
 * 1.可以解决node部署问题
 * 2.可以从npm服务器上下载具体程序
 * 3.允许其他用户下载自己编写的包或者程序
 * 
 * 查看npm的版本  ：npm -v
 * 
 * 初始化npm： npm init
 * 
 * 如何升级npm版本：npm install npm -g
 * npm 命令  install 安装、下载   npm包名称  -g全局   -g=global
 * 
 * 
 * 安装其他模块(依赖)：下载前必须先初始化
 * 
 * 全局 --》npm install<package> -g
 * 本地安装--》npm install<package>
 * 安装包的最新版本---》npm install <package>@latest
 * 运行时（生产环境）用到的包 ---npm install <package> --save-dev  (--save-dev == D)
 * jquery--》npm install jquery --save    --save  ==》指代的是生产环境
 * 卸载---》npm uninstall <package>
 * 更新---》npm undate <package>
 * 更新到置顶版本---》npm install <package>@version
 * 帮助--》npm help
 * 查看目录---》npm root
 * 查看包的具体信息 ---》npm view <package>
 * 查看当前包的版本号 --》npm install <package> version
 * 查看包bug ---》npm bugs
 * 查看当前项目的包列表---》npm list
 * npm list -g  查看全局安装包的包信息
 * 检查包是否过时---》npm outdated
 * 清楚未用到的包---》npm prune
 * 清楚缓存---》npm cache clean
 * 添加用户---》npm addUser
 * 
 * 
 * 
 * 
 * 
 * 
 */