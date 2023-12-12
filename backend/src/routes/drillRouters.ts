import { Router } from "express"
import drillController from "../controllers/drillController"
import AuthUser from "../middleware/authUser"

const authenticateUser = new AuthUser()
const drillRouters = Router()
const drill = new drillController()

drillRouters.post("/", authenticateUser.auth, drill.create)
drillRouters.get(
  "/:classPlanId",
  authenticateUser.auth,
  drill.getManyByClassPlanId,
)
drillRouters.get("/drill/:id", authenticateUser.auth, drill.show)
drillRouters.put("/:id", authenticateUser.auth, drill.updateById)
drillRouters.put("/image/:id", authenticateUser.auth, drill.updateImage)
drillRouters.delete("/:id", authenticateUser.auth, drill.deleteById)

export default drillRouters
