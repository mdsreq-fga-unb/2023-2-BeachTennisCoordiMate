import { Router } from "express"
import userController from "../controllers/userController"

const userRouters = Router()
const user = new userController()

userRouters.post("/", user.create)
userRouters.post("/login", user.login)

export default userRouters
