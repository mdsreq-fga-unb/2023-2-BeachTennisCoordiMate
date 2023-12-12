import { Router } from "express"
import drillElementController from "@/controllers/drillElementController"
import AuthUser from "../middleware/authUser"

const drillElementRouters = Router()
const authenticateUser = new AuthUser()
const drillElement = new drillElementController()

drillElementRouters.post("/", authenticateUser.auth, drillElement.create)
drillElementRouters.get(
  "/:drillId",
  authenticateUser.auth,
  drillElement.getManyByDrillId,
)
drillElementRouters.put("/:id", authenticateUser.auth, drillElement.updateById)
drillElementRouters.delete(
  "/:id",
  authenticateUser.auth,
  drillElement.deleteById,
)

export default drillElementRouters
