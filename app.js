import express from "express"
import { existsSync } from "fs"
import * as fs from "fs/promises"
import path from "path"
const app = express()

const PORT = process.env.port || 7878

const christmas_2026_html_path = path.join(process.cwd(), "public/christmaslist2026.html")
const christmas_2026_standard_html = await fs.readFile(christmas_2026_html_path, "utf-8")
const christmas_2026_strobe_html = christmas_2026_standard_html.replace("christmaslist2026.css", "christmaslist2026_strobe.css")

app.get("/christmas2026", (req, res) => {
    res.send(christmas_2026_standard_html)
})
app.get("/christmas2026strobe", (req, res) => {
    res.send(christmas_2026_strobe_html)
})
if (existsSync("./public")) {
    app.use(express.static("./public"))
} else if (fs.existsSync("/home/cobbn/webserver/n-a-t-h-a-n.dev/public")) {
    app.use(express.static("/home/cobbn/webserver/n-a-t-h-a-n.dev/public"))
} else {
    console.log("Couldn't find files")
    process.exit(1);
}
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
