import type { NextPage } from "next"
import React, { useState } from "react"
import DefaultLayout from "components/layouts/DefaultLayout"
import { Info } from "./Info"

const Home: NextPage = () => {
   return (
      <div>
         <DefaultLayout>
            <Info />
         </DefaultLayout>
      </div>
   )
}

export default Home
