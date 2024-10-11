import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { Book, BookCards, getAllData, getSearchData } from "./api"
import Shelf from "./components/Shelf"
import BookDetail from "./components/BookDetail"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Modal from "./components/Modal"

function App() {
  const [books, setBooks] = useState<BookCards[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {

    getAllData().then((resp) => setBooks(resp))
    // getSearchData("python")
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Shelf books={books} />} />
          <Route path="/book/:id" element={<BookDetail  />} />
        </Routes>
        {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
        
        </Modal> */}
      </div>
    </BrowserRouter>
  )
}

export default App
