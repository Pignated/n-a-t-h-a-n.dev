const express = require("express")
const fs = require("fs")
const app = express()

const PORT = process.env.port || 7878
if (fs.existsSync("./public")) {
    app.use(express.static("./public"))
} else if (fs.existsSync("/home/cobbn/webserver/n-a-t-h-a-n.dev/public")) {
    app.use(express.static("/home/cobbn/webserver/n-a-t-h-a-n.dev/public"))
} else {
    console.log("Couldn't find files")
    return
}
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}` )
})
