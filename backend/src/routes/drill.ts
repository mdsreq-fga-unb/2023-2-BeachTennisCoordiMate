import { Router } from "express"
import drillController from "../controllers/drillController"

const drillRouters = Router()
const drill = new drillController()

drillRouters.post("/", drill.create)

export default drillRouters
