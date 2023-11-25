import { sign } from "jsonwebtoken"

interface Idata {
  id: string
  level: string
}

export default class AuthUser {
  generateToken(data: Idata): string {
    return sign(data, process.env.AUTH_CONFIG_SECRET as string, {
      subject: data.id,
      expiresIn: "30d",
    })
  }
}
