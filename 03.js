var path = require("path")

// 1.basename 返回path的最后一部分
// console.log(path.basename("aa/bb/cc/1.js"))

// 2.dirname  返回目录名
// console.log(path.dirname("aa/bb/cc/1.js"))

// 3.format  从对象中解析出路径字符串
// 注：
// 如果dir和root同时存在，root会被忽略
// 如果base和ext/name同时存在，则会忽略ext和name
// console.log(path.format({
//     dir: "/aa", //目录名
//     root: "/bb/", //目录
//     base: "1.js", //文件名称 =name+exts
//     name: "aaaaaa",
//     ext: ".css" //后缀名
// }))

// 4.parse  返回一个对象
// console.log(path.parse("aa/bb/cc/2.js"))


// 5.join  将所有的名称利用path.seq连起来，再通过normalize格式化
// console.log(path.join("/aa", "/bb", "./2.js"))

// 6.normalize  格式化、规范化返回的path
// console.log(path.normalize("/aa////////bb/../1.js"))

// 7.extname  获取文件后缀名
// console.log(path.extname("/aa/bb/1.css"))

// 8.reslove  获取文件的绝对路径
// console.log(path.resolve("aa", "bb", "cc", "1/2"))

// 9.relative  获取文件的绝对路径
var begin = "c:aa/b"
var end = "c:dd/v"
console.log(path.relative(begin, end))