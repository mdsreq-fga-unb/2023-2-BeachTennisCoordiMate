import { Router } from "express"
import homeRoutes from "./homeRouters"
import userRoutes from "./userRouters"
import classPlanRouters from "./classPlanRouters"
import drillRouters from "./drillRouters"

const router = Router()

router.use("/", homeRoutes)
router.use("/user", userRoutes)
router.use("/classPlan", classPlanRouters)
router.use("/drill", drillRouters)

export { router }
    