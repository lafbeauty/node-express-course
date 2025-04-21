const express = require("express")
const path = require("path")

const app = express()

// setup static and middleware
app.use(express.static("./public")) //change this to navbar-app

//sendFile is used but not for sending html files
//we want to add it to static assets as well
/*
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
}) */

app.all("*", (req, res) => {
  res.status(404).send("resource not found")
})

app.listen(5000, () => {
  console.log("server is listening on port 5000....")
})
