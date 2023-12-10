import express from "express"
import { router } from "./routes"
import cors from "cors"
import "dotenv/config"

const app = express()

app.use(cors())
app.use(express.json({ limit: "200mb" }))
app.use(express.urlencoded({ limit: "200mb", extended: true }))
app.use(express.text({ limit: "200mb" }))
app.use(router)

export { app }
