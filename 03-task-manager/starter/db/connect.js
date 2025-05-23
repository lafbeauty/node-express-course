const mongoose = require("mongoose")

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindandModify: false,
    useUnifiedYopology: true,
  })
}

/*mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindandModify: false,
    useUnifiedYopology: true,
  })*/

//.then(() => console.log("connected to the db..."))
//.catch((err) => console.log(err))

module.exports = connectDB
