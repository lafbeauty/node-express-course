const express = require("express")
const app = express()

let peopleRouter = require("./routes/people")

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().toISOString()
  console.log(method, url, time)
  next()
}
app.use("/", logger)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/v1/people", peopleRouter)

//Assignment using the first method to invoke logger
app.get("/", (req, res) => {
  res.send("home")
})

//GET statement without logger
/*
app.get("/", (req, res) => {
  res.send("Homepage")
})

app.get("/api/v1/people", (req, res) => {
  //res.send("Peeps")
  res.json(people)
})
//POST statement for assignment
app.post("/api/v1/people", (req, res) => {
  const newPerson = req.body
  if (!newPerson.name) {
    res.status(400).json({ success: false, message: "Please provide a name" })
  } else {
    people.push({ id: people.length + 1, name: req.body.name })
    res.status(201).json({ success: true, name: req.body.name })
  }
})*/

app.listen(3000, () => {
  console.log("Server is listening on port 3000....")
})
