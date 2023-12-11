import { Router } from "express"
import classPlanController from "../controllers/classPlanController"

const classPlanRouters = Router()
const classPlan = new classPlanController()

classPlanRouters.post("/", classPlan.create)
classPlanRouters.get("/:id", classPlan.show)
classPlanRouters.get(
  "/pesquisa-data-titulo/:userId/:title/:startDate/:finalDate",
  classPlan.searchByCreatedAtOrTitle,
)
classPlanRouters.get("/planos-usuario/:userId", classPlan.list)
classPlanRouters.put("/:id", classPlan.updateById)
classPlanRouters.delete("/:id", classPlan.delete)

export default classPlanRouters
