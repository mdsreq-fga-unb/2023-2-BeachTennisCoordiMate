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
              id: true,
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

  getManyByClassPlanId = async (req: Request, res: Response) => {
    try {
      const { classPlanId } = req.params
      const drills = await prisma.drill.findMany({
        where: {
          classPlanId,
        },
        select: {
          id: true,
          title: true,
        },
      })
      res.status(200).json(drills)
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }

  updateById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const data = drillSchema.parse(req.body)
      const updatedDrill = await prisma.drill.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      })
      res.status(204).json(updatedDrill)
    } catch (err) {
      console.log("newds", err)
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }
    }
  }

  updateImage = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const image = req.body.image
      const updatedDrill = await prisma.drill.update({
        where: {
          id,
        },
        data: {
          image,
        },
      })
      console.log("Foi")
      res.status(204).json(updatedDrill)
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }

  deleteById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      const drills = await prisma.drill.findMany({
        where: {
          id,
        },
        select: {
          drillElements: {
            select: {
              id: true,
            },
          },
        },
      })

      drills.map(async (drill) => {
        drill.drillElements.map(async (drillElement) => {
          await prisma.drillElement.delete({
            where: {
              id: drillElement.id,
            },
          })
        })
        await prisma.drill.delete({
          where: {
            id,
          },
        })
      })

      res.status(204).json({ message: "Drill deleted" })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Internal Server Error" })
    }
  }

  show = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const drill = await prisma.drill.findUnique({
        where: {
          id: id,
        },
        include: {
          classPlan: {
            select: {
              id: true,
            },
          },
        },
      })
      res.status(200).json(drill)
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }
}
