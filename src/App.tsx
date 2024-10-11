import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { getAllData, getSearchData } from "./api"
import Shelf from "./components/Shelf"
import BookDetail from "./components/BookDetail"
// import Modal from "./components/Modal"

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {

    // getAllData()
    // getSearchData("python")
  })

  return (
    <div className="mx-auto">
      <Navbar />
      {/* <BookDetail /> */}
      <Shelf />
      {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
      
      </Modal> */}
    </div>
  )
}

export default App
