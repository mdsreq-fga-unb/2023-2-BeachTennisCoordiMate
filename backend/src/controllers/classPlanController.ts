// import { Request, Response } from "express"
// import { prisma } from "@/prisma"
// import { ZodError } from "zod"
// import { classPlanSchema } from "@/zodSchemas/classPlan.zod"
// import { fromZodError } from "zod-validation-error"

// // prettier-ignore
// export default class classPlanController {
//   create = async (req: Request, res: Response) => {
//     try {
//       const data = classPlanSchema.parse(req.body)
//       await prisma.classPlan.create({
//         data: {
//           ...data,
//         },
//         include: {
//           user: true,
//         },
//       })
//       res.status(201).json(data)
//     } catch (err) {
//       if (err instanceof ZodError) {
//         res.status(400).json(fromZodError(err))
//       } else {
//         res.status(500).json({ error: "Internal Server Error" })
//       }
//     }
//   }
// }
