import React from 'react'

const BookCard = () => {
  return (
    <div className=' mx-auto p-4 w-9/12 sm:w-11/12 md:w-full shadow rounded relative border
      transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <img src="https://www.dbooks.org/img/books/1503212300s.jpg" alt="1503212300" className='w-full h-48 object-contain mb-4' />
        <h3 className='text-lg font-semibold line-clamp-3'>Invent Your Own Computer Games with Python</h3>
    </div>
  )
}

export default BookCard