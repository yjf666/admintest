var fs = require("fs")
    // 读文件  
fs.readFile("./1.txt", function(err, data) {

    console.log(err) //null

    console.log(data.toString())


})


fs.writeFile("./2.txt", "杨俊峰", function(err) {
        console.log(err)
    })
    // 若文件不存在则创建文件
fs.writeFile("./3.txt", "杨俊峰", function(err) {
    console.log(err)
})