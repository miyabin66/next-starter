// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Request, Response } from 'express'

export default (_req: Request, res: Response): void => {
  res.status(200).json({ name: 'John Doe' })
}
