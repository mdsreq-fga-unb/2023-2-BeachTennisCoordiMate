import { Router } from "express"
import userController from "../controllers/userController"

const userRouters = Router()
const user = new userController()

userRouters.post("/", user.create)

export default userRouters
