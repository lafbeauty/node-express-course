//console.log("Task Manager App")
const express = require("express")
const app = express()
const routes = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()

//middleware
app.use(express.json()) // needed when we want to get data in req.body

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App")
})

app.use("/api/v1/tasks", routes)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
//app.listen(port, console.log(`server is listening on port ${port}...`))
