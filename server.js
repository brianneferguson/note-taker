// look for course work
const express = require("express")
const apiroute = require("./routes/apiroutes")
const htmlroutes = require("./routes/htmlroutes")
const app = express()
const PORT = 3001
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api",apiroute)
app.use("/",htmlroutes)
app.listen(PORT,()=>console.log("listening"))