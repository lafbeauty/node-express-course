const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

<<<<<<< HEAD
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
=======
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')//gonna point to your app bc its a __dirname = global variable 
console.log(absolute)

//app is gonna run in different environments so path brings different things in 
>>>>>>> c0473ab05b36dc963e6d434c9b56c4d6a3decdb4
