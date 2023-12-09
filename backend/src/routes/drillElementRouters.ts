import { Router } from "express"
import drillElementController from "@/controllers/drillElementController"

const drillElementRouters = Router()
const drillElement = new drillElementController()

drillElementRouters.post("/", drillElement.create)
drillElementRouters.get("/:drillId", drillElement.getManyByDrillId)
drillElementRouters.put("/:id", drillElement.updateById)
drillElementRouters.delete("/:id", drillElement.deleteById)

export default drillElementRouters
