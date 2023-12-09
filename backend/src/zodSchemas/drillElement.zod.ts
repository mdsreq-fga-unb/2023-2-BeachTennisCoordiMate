import { z } from "zod"

const drillElementSchema = z.object({
  index: z.number(),
  top: z.number(),
  left: z.number(),
  drillId: z.string().uuid("Id do drill inválida"),
})

export { drillElementSchema }
