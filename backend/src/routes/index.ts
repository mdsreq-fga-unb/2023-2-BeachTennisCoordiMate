import { Router } from "express"
import homeRoutes from "./homeRouters"
import userRoutes from "./userRouters"

const router = Router()

router.use("/", homeRoutes)
router.use("/user", userRoutes)

export { router }
