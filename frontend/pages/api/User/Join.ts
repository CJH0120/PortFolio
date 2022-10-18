import type { NextApiRequest, NextApiResponse } from "next"
import InsertQuery, { db } from "../db/db"

export default function F(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "POST") {
      console.log(req.headers)
   }
}
