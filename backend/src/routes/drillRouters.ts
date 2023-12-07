import { Router } from "express"
import drillController from "../controllers/drillController"

const drillRouters = Router()
const drill = new drillController()

drillRouters.post("/", drill.create)
drillRouters.get("/:classPlanId", drill.getManyByClassPlanId)
drillRouters.get("/drill/:id", drill.show)
drillRouters.put("/:id", drill.updateById)
drillRouters.delete("/:id", drill.deleteById)

export default drillRouters
