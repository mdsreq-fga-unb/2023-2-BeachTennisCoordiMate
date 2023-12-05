import { Router } from "express"
import classPlanController from "../controllers/classPlanController"

const classPlanRouters = Router()
const classPlan = new classPlanController()

classPlanRouters.post("/", classPlan.create)

export default classPlanRouters
