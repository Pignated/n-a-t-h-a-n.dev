const express = require("express")
const app = express()
const PORT = process.env.port || 7878
app.use(express.static("/home/cobbn/webserver/n-a-t-h-a-n.dev/public"))
app.listen(PORT, ()=>{
    console.log("AHHH")
})
