import { z } from "zod"

const userSchema = z.object({
  name: z.string().min(4, "Nome deve ter no mínimo 4 caracteres"),
  email: z.string().email("Endereço de email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  level: z.enum(["admin", "user"]),
})

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  level: z.enum(["admin", "user"]),
})

export { userSchema, loginSchema }
