import { isEqualType } from "graphql"
import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "./db/db"

export default async function F(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "GET") {
      selectQuery()
         .then((response) => {
            res.statusCode = 200
            res.setHeader("Content-Type", "application/json")
            console.log(response)
            res.end(JSON.stringify(response))
         })
         .catch((error) => {
            res.json(error)
            res.status(405).end()
         })
   }
}
async function selectQuery() {
   try {
      await db.connect()
      const results = await db.query(`SELECT  COUNT(*) FROM   User_Table`)
      await db.end()
      return results
   } catch (error) {
      return { error }
   }
}
