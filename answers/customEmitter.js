const EventEmitter = require("events") //invoking the events module

const customEmitter = new EventEmitter()

customEmitter.on("sayHello", (name) => {
  console.log(`Hello, ${name}! Welcome!`)
})

customEmitter.emit("sayHello", "laura")
