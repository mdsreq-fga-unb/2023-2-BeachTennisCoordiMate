import { Router } from "express"
import classPlanController from "../controllers/classPlanController"

const classPlanRouters = Router()
const classPlan = new classPlanController()

classPlanRouters.post("/", classPlan.create)
classPlanRouters.get("/:id", classPlan.show)
classPlanRouters.get("/planos-usuario/:userId", classPlan.list)
classPlanRouters.delete("/:id", classPlan.delete)

export default classPlanRouters
