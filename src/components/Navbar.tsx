import { FormEvent } from "react"
import { FaSearch } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const Navbar = ( { search, setSearch } : { search : string, setSearch: React.Dispatch<React.SetStateAction<string>>}) => {
  const navigate = useNavigate()
  const searchHandler = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`search/${search}`)
  }
  return (
    <nav className="py-8 shadow-md">
        <div className="container mx-auto flex justify-around items-center h-11">
            <div className="text-xl font-bold mx-6">
                <Link to='/'>Library</Link>
            </div>
            <form className="relative flex-1 h-full mr-6" onSubmit={(e) => searchHandler(e)}>
                <input type="text" className="px-5 border border-black rounded-3xl w-full h-full" placeholder="Search for book" onChange={(e) => setSearch(e.target.value)} />
                <FaSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
            </form>
        </div>
    </nav>
  )
}

export default Navbar