const { createReadStream } = require("fs")

const stream = createReadStream("../content/big.txt", {
  highWaterMark: 500,
  encoding: "utf8",
})
let counter = 0

stream.on("data", (result) => {
  counter++
  console.log(result)
})

stream.on("error", (err) => console.log(err))

//Revised after asking my reviewer
stream.on("end", () => {
  console.log(`There are ${counter} chunks of data`)
})
