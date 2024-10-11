import { Link } from 'react-router-dom'
import { BookCards } from '../api'

const BookCard = ({ book }: { book: BookCards }) => {
  const newId = Number(book.id.toString().replace(/X/,''))
  return (
    <Link to={`/book/${newId}`}>
        <div className=' mx-auto h-full p-4 w-9/12 sm:w-11/12 md:w-full shadow rounded relative border
        transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={book.image} alt={book.title} className='w-full h-48 object-contain mb-4' />
            <h3 className='text-lg font-semibold line-clamp-3'>{book.title}</h3>
        </div>
    </Link>
  )
}

export default BookCard