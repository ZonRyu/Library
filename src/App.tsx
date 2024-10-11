import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { BookCards, getAllData } from "./api"
import Home from "./components/Home"
import BookDetail from "./components/BookDetail"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./components/Search"
import NotFound from "./components/NotFound"
import Loading from "./components/Loading"

function App() {
  const [books, setBooks] = useState<BookCards[]>([])
  const [search, setSearch] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    getAllData().then((resp) => setBooks(resp)).then(() => setIsLoading(false))
  }, [])

  if(isLoading) return <Loading />

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/book/:id" element={<BookDetail  />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
