// 模块化  module

// console.log(module)

/**
 *  {
  id: '.',
  path: 'F:\\HB\\Node\\class03.17',
  exports: {},
  parent: null,
  filename: 'F:\\HB\\Node\\class03.17\\module.js',
  loaded: false,
  children: [],
  paths: [
    'F:\\HB\\Node\\class03.17\\node_modules',
    'F:\\HB\\Node\\node_modules',
    'F:\\HB\\node_modules',
    'F:\\node_modules'
  ]
}
module.exports和exports的区别  ==》抛出  暴露
1.每一个js文件都会自动创建一个module，同时module会创建一个exports的属性，初始值为空
2.export是包含module。export的值
3.module.exports的值会覆盖exports里面的值
 */

var bar = require("./bar.js")
console.log(bar.b)