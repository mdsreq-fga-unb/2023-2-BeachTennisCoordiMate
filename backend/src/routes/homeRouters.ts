import { Router } from "express"
import homeController from "../controllers/homeController"

const homeRoutes = Router()
const home = new homeController()

homeRoutes.get("/", home.home)

export default homeRoutes
