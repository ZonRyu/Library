import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center h-[75vh]">
      <h1 className="text-[12rem] font-bold">404</h1>
      <p className="text-xl mb-4">Sorry the page you looking for was not found</p>
      <h2 className="text-3xl font-bold">Not Found</h2>
      <Link className="mt-6 bg-black rounded" to="/">
        <button className="py-2 px-4 text-white text-3xl font-semibold">Go back</button>
      </Link>
    </div>
  )
}

export default NotFound