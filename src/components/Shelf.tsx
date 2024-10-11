import React from 'react'
import BookCard from './BookCard'

const Shelf = () => {
  return (
    <div className='container mx-auto py-12'>
        <div className='mx-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    </div>
  )
}

export default Shelf