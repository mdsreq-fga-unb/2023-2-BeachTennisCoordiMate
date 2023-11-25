import { Request, Response } from "express"
import { prisma } from "@/prisma"
import { ZodError } from "zod"
import { classPlanSchema } from "@/zodSchemas/classPlan.zod"
import { fromZodError } from "zod-validation-error"
import { Prisma } from "@prisma/client"

export default class classPlanController {
  create = async (req: Request, res: Response) => {
    try {
      const data = classPlanSchema.parse(req.body)
      const classPlan = (await prisma.classPlan.create({
        data: {
          ...data,
        },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
        },
      })) as Prisma.ClassPlanCreateInput

      res.status(201).json(classPlan)
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }
    }
  }
}