import { Request, Response } from "express"

export default class homeController {
  home = async (req: Request, res: Response) =>
    res.status(200).json({
      message: "BeachTennisCoordiMate",
    })
}
