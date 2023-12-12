import { Router } from "express"
import classPlanController from "../controllers/classPlanController"
import AuthUser from "../middleware/authUser"

const classPlanRouters = Router()
const authenticateUser = new AuthUser()
const classPlan = new classPlanController()

classPlanRouters.post("/", authenticateUser.auth, classPlan.create)
classPlanRouters.get("/:id", authenticateUser.auth, classPlan.show)
classPlanRouters.get(
  "/pesquisa-data-titulo/:userId/:title/:startDate/:finalDate",
  authenticateUser.auth,
  classPlan.searchByCreatedAtOrTitle,
)
classPlanRouters.get("/planos-usuario/:userId", classPlan.list)
classPlanRouters.put("/:id", authenticateUser.auth, classPlan.updateById)
classPlanRouters.delete("/:id", authenticateUser.auth, classPlan.delete)

export default classPlanRouters
