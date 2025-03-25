const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("homepage")
  } else {
    //res.end("cant find")
  }
})

server.listen(3000, () => {
  console.log("Server is listening to on port 3000")
})
