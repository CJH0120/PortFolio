import type { NextPage } from "next"
import React, { useState } from "react"
import DefaultLayout from "components/layouts/DefaultLayout"
import { Info } from "./Info"
import Idstore from "store/Idstore"
const Home: NextPage = () => {
   const { id } = Idstore()
   return (
      <div>
         <DefaultLayout>
            <Info />
         </DefaultLayout>
      </div>
   )
}

export default Home
