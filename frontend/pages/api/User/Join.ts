import type { NextApiRequest, NextApiResponse } from "next"
import InsertQuery, { db } from "../db/db"

export default function F(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "POST") {
      let ID = req?.body.UserId
      let PW = req?.body.userPw
      InsertQuery(ID, PW)
         .then((response) => {
            console.log(response)
            res.json(true)
         })
         .catch((error) => {
            res.json(error)
            // res.status(405).end()
         })
   }
}
