import "../styles/globals.scss"
import type { AppProps } from "next/app"
import DefaultLayout from "components/layouts/DefaultLayout"
import { useEffect, useState } from "react"
import LoadingPg from "components/control/Loading"

function MyApp({ Component, pageProps }: AppProps) {
   const [Data, setData] = useState<any>({})
   const [isLoading, setIsLoading] = useState<boolean>(true)

   useEffect(() => {
      fetch(`/api/Categorie`)
         .then((res) => res.json())
         .then((res) => setData(res))
         .finally(() => setIsLoading(false))
   }, [])
   return isLoading ? (
      <LoadingPg />
   ) : (
      <DefaultLayout Data={Data?.Categorie}>
         <Component {...pageProps} />
      </DefaultLayout>
   )
}

export default MyApp
