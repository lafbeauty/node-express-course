const express = require("express")
const app = express()
const { products } = require("./data") //Assignment question1

//step 4 of assignment
app.use(express.static("./public"))

//step 7 of assignment
app.get("/api/v1/test", (req, res) => {
  console.log("json sent to browser")
  res.json({ message: "It worked!" })
})

//Assignment question 1
app.get("/api/v1/products", (req, res) => {
  res.json(products)
})
/*
app.get("/api/v1/products/:productID", (req, res) => {
  res.json(req.params)
}) */

//Assignment Question 3 - Additional Logic

app.get("/api/v1/products/lessthan20", (req, res) => {
  const lessThanTwenty = products.filter((product) => product.price < 20)
  res.json(lessThanTwenty)
})

//Assignment question 2
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID)
  const product = products.find((product) => product.id === idToFind)

  if (!product) {
    return res.status(404).send("Product Does Not Exist")
  }

  res.json(product)
})

//Assignment Query Search Question 2
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query) //to access the query string parameters
  const { search, limit } = req.query
  let searchedProducts = [...products]
  if (search) {
    searchedProducts = searchedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    searchedProducts = searchedProducts.slice(0, Number(limit))
  }
  res.status(200).json(searchedProducts)
  res.send("check console for the array of searched products")
})

app.all("*", (req, res) => {
  res.status(404).send("404 error")
})

//Assignment step 6
app.listen(3000, () => {
  console.log("server is listening on port 3000..")
})
