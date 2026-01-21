import express from "express"
import path from "node:path";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000...")
})