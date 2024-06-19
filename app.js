const express = require("express");
const app = express();
const path = require("path")
const log = require("debug")("development:MainApp")
require("dotenv").config()


const indexRouter = require("./routes/index-router")
const aboutRouter = require('./routes/about-router')
const prRouter = require('./routes/pr-router')
const productRouter = require("./routes/product-router")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))





app.use("/", indexRouter)

app.use("/about",aboutRouter)

app.use("/pr",prRouter)

app.use("/product",productRouter)


app.listen(process.env.PORT,()=>{
    log(`Listening at Port: ${process.env.PORT}`)
})