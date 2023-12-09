import { Request, Response } from "express"
import { prisma } from "@/prisma"
import { ZodError } from "zod"
import { drillElementSchema } from "@/zodSchemas/drillElement.zod"
import { fromZodError } from "zod-validation-error"
import { Prisma } from "@prisma/client"

export default class drillElementController {
  create = async (req: Request, res: Response) => {
    try {
      const data = drillElementSchema.parse(req.body)
      const drillElement = (await prisma.drillElement.create({
        data: {
          ...data,
        },
        include: {
          drill: {
            select: {
              id: true,
            },
          },
        },
      })) as Prisma.DrillElementCreateInput
      res.status(201).json(drillElement)
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }
    }
  }

  getManyByDrillId = async (req: Request, res: Response) => {
    try {
      const { drillId } = req.params
      const drillElements = await prisma.drillElement.findMany({
        where: {
          drillId,
        },
        select: {
          id: true,
          top: true,
          left: true,
          index: true,
        },
      })
      res.status(200).json(drillElements)
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }

  updateById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const data = drillElementSchema.parse(req.body)
      const updatedDrillElement = await prisma.drillElement.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      })
      res.status(204).json(updatedDrillElement)
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json(fromZodError(err))
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }
    }
  }

  deleteById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const deletedDrillElement = await prisma.drillElement.delete({
        where: {
          id,
        },
      })
      res.status(204).json(deletedDrillElement)
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  }
}
