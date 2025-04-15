const { writeFile, readFile } = require("fs").promises //we're invoking the fs file module and accessing the promises within

async function writer() {
  console.log("starting")
  try {
    const result1 = await writeFile("./temp.txt", "This is line 1\n", {
      flag: "a",
    })
    console.log("Line 1 Done")

    const result2 = await writeFile("./temp.txt", "This is line 2\n", {
      flag: "a",
    })
    console.log("Line 2 Done")

    const result3 = await writeFile("./temp.txt", "This is line 3\n", {
      flag: "a",
    })
    console.log("Line 3 Done")

    console.log("ending")
  } catch (error) {
    console.log("error 1", error)
  }
}

async function reader() {
  console.log("reading")
  try {
    const read1 = await readFile("./temp.txt", "utf8")
    console.log(read1)
  } catch (error) {
    console.log("error with read1", error)
  }
}

async function readWrite() {
  console.log("starting readWrite")
  try {
    await writer()

    await reader()

    console.log("writer and reader working")
  } catch (err) {
    console.log("Error with readWrite:", error)
  }
}

readWrite()
