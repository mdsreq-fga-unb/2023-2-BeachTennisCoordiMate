import { z } from "zod"

const drillSchema = z.object({
  title: z.string().min(5, "Título deve ter no mínimo 5 caracteres"),
  description: z.string().max(500, "Descrição deve ter no máximo 500 caracteres"),
  observations: z
    .string()
    .max(500, "Observações deve ter no máximo 500 caracteres"),
  classPlanId: z.string().uuid("Id do plano de aula inválido"),
})

export { drillSchema }