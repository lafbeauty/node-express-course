// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

/*const names = require("./04-names")
const sayHi = require("./05-utils")
const data = require("./06-alternative-flavor")
require("./07-mind-grenade")
ayHi("susan")
sayHi(names.john)
sayHi(names.peter)*/

/*const secret = "SUPER SECRET"
const john = "john"
const peter = "peter"*/

/*const sayHi = (name) => {
  console.log(`hello there ${name}`)
}*/
const names = require("./04-names") //everytime you create your own module, you'll have to give it a path
const sayHi = require("./05-utils")
//console.log(names)
const data = require("./06-alternative-flavor")
console.log(data)
require("./07-mind-grenade")
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)
