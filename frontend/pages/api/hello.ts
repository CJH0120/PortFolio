import type { NextApiRequest, NextApiResponse } from "next"

const mysql = require("mysql")
const dbconfig = require("./db/db")
const connection = mysql.createConnection(dbconfig)
export default function F(req: NextApiRequest, res: NextApiResponse) {
   connection.connect()

   connection.query(
      "SELECT count(*) from  User_Table",
      (error, rows, fields) => {
         if (error) throw error
         console.log("User info is: ", rows)
      }
   )
}
