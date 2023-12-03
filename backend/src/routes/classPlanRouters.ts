import { Router } from "express"
import classPlanController from "../controllers/classPlanController"

const classPlanRouters = Router()
const classPlan = new classPlanController()

classPlanRouters.post("/", classPlan.create)
classPlanRouters.get("/", classPlan.list)
classPlanRouters.get("/visualizar/:id", classPlan.show)

export default classPlanRouters
