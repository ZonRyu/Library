import { useEffect } from "react"
import Navbar from "./components/Navbar"
import { getAllData, getSearchData } from "./api"
import Shelf from "./components/Shelf"

function App() {
  useEffect(() => {

    // getAllData()
    // getSearchData("python")
  })

  return (
    <div className="mx-auto">
      <Navbar />

      <Shelf />
    </div>
  )
}

export default App
