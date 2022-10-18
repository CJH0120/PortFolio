import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import DefaultLayout from "components/layouts/DefaultLayout"
import { Info } from "./Info"
import Idstore from "store/Idstore"
import Loading from "components/control/Loading"
import LoadingPg from "components/control/Loading"
const Home: NextPage = () => {
   const [Data, setData] = useState<any>({})
   const [isLoading, setIsLoading] = useState<boolean>(true)

   useEffect(() => {
      fetch(`/api/Idx`)
         .then((res) => res.json())
         .then((res) => setData(res))
         .finally(() => {
            setIsLoading(false)
         })
   }, [])
   const { id } = Idstore()
   return (
      <div>
         {isLoading ? (
            <LoadingPg />
         ) : (
            <DefaultLayout Data={Data.Categorie}>
               <Info Data={Data.Info} />
            </DefaultLayout>
         )}
      </div>
   )
}

export default Home
