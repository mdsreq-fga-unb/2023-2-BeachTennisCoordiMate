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
  list = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params
      const classPlan = await prisma.classPlan.findMany({
        where: {
          userId: userId,
        },
        select: {
          id: true,
          title: true,
        },
      })
      res.status(200).json(classPlan)
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }
  show = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const classPlan = await prisma.classPlan.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          title: true,
          goals: true,
          observations: true,
          userId: true,
        },
      })
      res.status(200).json(classPlan)
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }

  searchByCreatedAtOrTitle = async (req: Request, res: Response) => {
    try {
      const { userId, title, startDate, finalDate } = req.params
      if (startDate == "_") {
        const classPlan = await prisma.classPlan.findMany({
          where: {
            userId: userId,
            title: { contains: title },
          },
          select: {
            id: true,
            title: true,
          },
        })
        res.status(200).json(classPlan)
      } else if (title == "_") {
        const start = new Date(startDate)
        const final = new Date(finalDate)
        const classPlan = await prisma.classPlan.findMany({
          where: {
            userId: userId,
            createdAt: {
              lte: final,
              gte: start,
            },
          },
          select: {
            id: true,
            title: true,
          },
        })
        res.status(200).json(classPlan)
      } else {
        const start = new Date(startDate)
        const final = new Date(finalDate)
        const classPlan = await prisma.classPlan.findMany({
          where: {
            userId: userId,
            createdAt: {
              lte: final,
              gte: start,
            },
            title: { contains: title },
          },
          select: {
            id: true,
            title: true,
          },
        })
        res.status(200).json(classPlan)
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      const classPlan = await prisma.classPlan.delete({
        where: { id },
      })

      res.status(200).json(classPlan)
    } catch (err) {
      err as Prisma.PrismaClientKnownRequestError
      res.status(500).json({ errors: { server: "Server error" } })
    }
  }

  updateById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const data = classPlanSchema.parse(req.body)
      const updatedPlan = await prisma.classPlan.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      })
      res.status(204).json(updatedPlan)
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }
    }
  }
}
