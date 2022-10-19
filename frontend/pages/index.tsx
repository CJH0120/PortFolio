import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import DefaultLayout from "components/layouts/DefaultLayout"
import { Info } from "./Info"
import Idstore from "store/Idstore"
import Loading from "components/control/Loading"
import LoadingPg from "components/control/Loading"
const Home: any = () => {
   const [Data, setData] = useState<any>({})
   const [Loading, setIsLoading] = useState<boolean>(true)

   useEffect(() => {
      fetch(`/api/Info`)
         .then((res) => res.json())
         .then((res) => setData(res.Info))
         .finally(() => setIsLoading(false))
   }, [])
   return !Loading && <Info Data={Data} />
}

export default Home
