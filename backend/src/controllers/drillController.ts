import { Request, Response } from "express"
import { prisma } from "@/prisma"
import { ZodError } from "zod"
import { drillSchema } from "@/zodSchemas/drill.zod"
import { fromZodError } from "zod-validation-error"
import { Prisma } from "@prisma/client"

export default class drillController {
  create = async (req: Request, res: Response) => {
    try {
      const data = drillSchema.parse(req.body)
      const drill = (await prisma.drill.create({
        data: {
          ...data,
        },
        include: {
          classPlan: {
            select: {
              id: true
            },
          },
        },
      })) as Prisma.DrillCreateInput
      res.status(201).json(drill)
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }
    }
  }
}