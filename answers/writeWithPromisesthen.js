const { writeFile, readFile } = require("fs").promises

writeFile("./temp.txt", "This is Line1 for question 2\n", { flag: "a" })
  .then(() => {
    console.log("line 1 for Question 2 is Done")
    return writeFile("./temp.txt", "This is Line2 for question 2\n", {
      flag: "a",
    })
  })
  .then(() => {
    console.log("Line 2 for question 2 is done")
    return writeFile("./temp.txt", "This is Line3 for Question 3", {
      flag: "a",
    })
  })
  .then(() => {
    console.log("Line 3 for Question 3 is done")
  })
