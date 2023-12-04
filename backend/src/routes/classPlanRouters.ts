import { Router } from "express"
import classPlanController from "../controllers/classPlanController"

const classPlanRouters = Router()
const classPlan = new classPlanController()

classPlanRouters.post("/", classPlan.create)
classPlanRouters.get("/", classPlan.list)
classPlanRouters.get("/visualizar/:id", classPlan.show)
classPlanRouters.get("/:userId", classPlan.list)
classPlanRouters.delete("/:id", classPlan.delete)

export default classPlanRouters
