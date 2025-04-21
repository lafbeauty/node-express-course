const { readFileSync, writeFileSync } = require("fs") //importing the fs module package

//provides two parameters: the path to file & the utf8 parameter
//console.log("start")
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
console.log(first, second) // will read and show text from the first and second files

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } //create a new value
)
console.log("done with this task")
console.log("starting the next one")
