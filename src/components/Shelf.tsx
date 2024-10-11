import BookCard from './BookCard'
import { BookCards } from '../api'

const Shelf = ({ books } : { books: BookCards[] | undefined}) => {
  return (
    <div className='container mx-auto py-12'>
        <div className='mx-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {books?.map((book) => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    </div>
  )
}

export default Shelf