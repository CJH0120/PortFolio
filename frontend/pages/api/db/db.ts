import mysql from "serverless-mysql"
export const db = mysql({
   config: {
      host: "127.0.0.1",
      user: "root",
      password: "root",
      database: "Porfolio",
   },
})

export default async function InsertQuery(Id: any, Pw: any) {
   console.log(Id)
   console.log(Pw)

   try {
      await db.connect()
      const results = await db.query(
         `
      Insert into User_Table(User_Id,User_Pw) 
      values(?,?)`,
         [Id, Pw]
      )
      await db.end()
      return results
   } catch (error) {
      return { error }
   }
}
