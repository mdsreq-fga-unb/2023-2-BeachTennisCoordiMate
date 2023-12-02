import { z } from "zod"

const classPlanSchema = z.object({
  title: z.string().min(5, "Título deve ter no mínimo 5 caracteres"),
  goals: z.string().max(600, "Objetivos deve ter no máximo 600 caracteres"),
  observations: z
    .string()
    .max(500, "Observações deve ter no máximo 500 caracteres"),
  userId: z.string().uuid("Id do usuário inválido"),
})

export { classPlanSchema }
