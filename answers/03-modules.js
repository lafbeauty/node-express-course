// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//Question 3a.
const names = require("./04-names")
console.log(names.user1)
console.log(names.user2)

//Question 3b.
const askPW = require("./05-utils")
askPW(names.user1.username)

//Question 3c.
const data = require("./06-alternative-flavor")
console.log(data.user1[0])
console.log(data.user2.username)

//Question 3d.
require("./07-mind-grenade")
