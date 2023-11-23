import { Request, Response } from "express"
import { Prisma } from "@prisma/client"
import { hash } from "bcrypt"
import { prisma } from "@/prisma"
import { ZodError } from "zod"
import { userSchema } from "@/zodSchemas/user.zod"
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
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        err as Prisma.PrismaClientKnownRequestError
        const b = err.meta?.target as string[] | undefined
        let inputErr: { email?: string; username?: string } = {}

        if (b?.includes("email")) inputErr = { email: "Email already exists" }

        if (b?.includes("username"))
          inputErr = { username: "Username already exists" }

        res.status(400).json({ errors: inputErr })
      }
    }
  }
}
