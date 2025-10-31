const express = require("express")
const app = express()
const PORT = process.env.port || 7878
app.use(express.static("public"))
app.listen(PORT, ()=>{
    console.log("AHHH")
})
