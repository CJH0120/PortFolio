import type { NextApiRequest, NextApiResponse } from "next"

const mysql = require("mysql")
const dbconfig = require("./Join")
const connection = mysql.createConnection(dbconfig)
export default function F(req: NextApiRequest, res: NextApiResponse) {
   connection.connect()
   if (req.method === "POST") {
      let sql =
         "INSERT INTO User_Table (User_Id,User_Pw) VALUES (" +
         req.body.UserId +
         ", " +
         req.body.userPw +
         ")"
      connection.query(sql, function (err, result) {
         if (err) throw err
         console.log("1 record inserted")
      })
      connection.end()
   }
}
