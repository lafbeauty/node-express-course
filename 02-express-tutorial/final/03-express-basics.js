const express = require("express") // invoking express js
const app = express() // creating the server

app.get("/", (req, res) => {
  console.log("user hit the resource")
  res.status(200).send("Home Page")
})

app.get("/about", (req, res) => {
  res.status(200).send("About Page")
})

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000, () => {
  console.log("server is listening on port 5000...")
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

//my notes: methods we'll use the most
//app.get
//app.post
//app.put
//app.delete
//app.all - use it all
//app.listen
//app.use - middleware
