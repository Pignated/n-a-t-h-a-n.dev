import express from "express"
import * as fs from "fs"
import path from "path"
const app = express()

const PORT = process.env.port || 7878
app.get("/christmas2026", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public/christmaslist2026.html"));
})
if (fs.existsSync("./public")) {
    app.use(express.static("./public"))
} else if (fs.existsSync("/home/cobbn/webserver/n-a-t-h-a-n.dev/public")) {
    app.use(express.static("/home/cobbn/webserver/n-a-t-h-a-n.dev/public"))
} else {
    console.log("Couldn't find files")
    process, exit(1);
}
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
