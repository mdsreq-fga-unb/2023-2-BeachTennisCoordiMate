import { Request, Response } from "express"
import { Prisma } from "@prisma/client"
import { ZodError } from "zod"
import { hash, compare } from "bcrypt"
import { prisma } from "@/prisma"
import AuthUser from "@/middleware/authUser"
import { userSchema, loginSchema } from "@/zodSchemas/user.zod"
import { fromZodError } from "zod-validation-error"

export default class userController {
  create = async (req: Request, res: Response) => {
    try {
      const data = userSchema.parse(req.body)
      const hashedPassword = await hash(data.password, 10)

      await prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      })
      res.status(201).json(data)
    } catch (err) {
      let inputErr: { email?: string; username?: string } = {}
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        err as Prisma.PrismaClientKnownRequestError
        const b = err.meta?.target as string[] | undefined

        if (b?.includes("email")) inputErr = { email: "Invalid email" }
        if (b?.includes("username"))
          inputErr = { username: "Username already exists" }

        if (inputErr) res.status(400).json({ errors: inputErr })
      } else res.status(500).json({ errors: { server: "Server error" } })
    }
  }

  login = async (req: Request, res: Response) => {
    try {
      const authUser = new AuthUser()

      const { email, password } = loginSchema.parse(req.body)
      const user = await prisma.user.findUnique({
        where: {
          email,
        } as Prisma.UserWhereUniqueInput,
      })
      if (!user) {
        res.status(400).json({ errors: { loginSchema: "Invalid credentials" } })
        return
      }
      const passwordMatch = await compare(password, user?.password as string)

      if (!passwordMatch) {
        res.status(400).json({ errors: { loginSchema: "Invalid credentials" } })
        return
      }

      const token = authUser.generateToken({
        id: user.id,
      })

      res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      })
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      }

      res.status(500).json({ errors: { server: "Server error" } })
    }
  }
}
