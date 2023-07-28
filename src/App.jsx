import React, { useState } from "react"
import { Header } from "./components/display/Header/Header"
import { Grid } from "./components/display/Grid/Grid"

function App() {

  const [search, setSearch] = useState('')


  const soo = (s) => {
    setSearch(s)
  }

  return (
   <div>

      <Header onPost={soo} />

      <Grid props={search} />

   </div>
  )
}

export default App
