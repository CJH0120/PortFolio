import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import DefaultLayout from "components/layouts/DefaultLayout"
import { Info } from "./Info"
import Idstore from "store/Idstore"
const Home: NextPage = () => {
   const [Data, setData] = useState<any>([])
   useEffect(() => {
      fetch(`/api/Idx`)
         .then((res) => res.json())
         .then((res) => setData(res))
   }, [])
   console.log(Data.Kategorie)
   const { id } = Idstore()
   return (
      <div>
         <DefaultLayout>
            <Info Data={Data.Info} />
         </DefaultLayout>
      </div>
   )
}

export default Home
