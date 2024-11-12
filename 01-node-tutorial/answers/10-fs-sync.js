const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

console.log(first, second)

writeFileSync(
  "./content/result-sync.txt",
  `testing out the built-in fs module: ${first}, ${second}`,
  { flag: "a" }
)

writeFileSync("./temporary/fileA.txt", `Hello`, { flag: "a" })
writeFileSync("./temporary/fileA.txt", `My name is Laura`, { flag: "a" })
writeFileSync(
  "./temporary/fileA.txt",
  `testing out the built-in fs module: ${first}, ${second}`,
  { flag: "a" }
)
