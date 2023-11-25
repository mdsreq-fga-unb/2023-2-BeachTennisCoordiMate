import { Router } from "express"
import homeRoutes from "./homeRouters"
import userRoutes from "./userRouters"
import classPlanRouters from "./classPlanRouters"

const router = Router()

router.use("/", homeRoutes)
router.use("/user", userRoutes)
router.use("/classPlan", classPlanRouters)

export { router }
