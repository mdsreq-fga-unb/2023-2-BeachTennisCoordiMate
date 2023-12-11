import { sign, verify } from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

interface Idata {
  id: string
}

export default class AuthUser {
  generateToken(data: Idata): string {
    return sign(data, process.env.AUTH_CONFIG_SECRET as string, {
      subject: data.id,
      expiresIn: "30d",
    })
  }

  async auth(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | null> {
    let token
    try {
      token = request.headers.authorization?.split(" ")[1]
      verify(token as string, process.env.AUTH_CONFIG_SECRET as string)
    } catch (err) {
      return response.status(401).json({
        message: "Token inválido!",
      })
    }
    next()
    return null
  }
}
