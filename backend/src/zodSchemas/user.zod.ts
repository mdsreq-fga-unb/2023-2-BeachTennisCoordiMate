import { z } from "zod"

const userSchema = z.object({
  name: z.string().min(4, "Nome deve ter no mínimo 4 caracteres"),
  email: z.string().email("Endereço de email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
})

export { userSchema }
