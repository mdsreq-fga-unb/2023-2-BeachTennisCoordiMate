import { Router } from "express"
import homeRoutes from "./homeRouters"

const router = Router()

router.use("/", homeRoutes)

export { router }
