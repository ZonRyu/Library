import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="py-8 shadow-md">
        <div className="container mx-auto flex justify-around items-center h-11">
            <div className="text-xl font-bold mx-6">
                <Link to='/'>Library</Link>
            </div>
            <div className="relative flex-1 h-full mr-6">
                <input type="text" className="px-5 border border-black rounded-3xl w-full h-full" placeholder="Search for book" />
                <FaSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar