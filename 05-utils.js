const { peter } = require("./04-names")

const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}
// export default
module.exports = sayHi //why are we setting this up as an object? because we have multiple ways we can do this

//module.exports = {john,peter}// alternative option