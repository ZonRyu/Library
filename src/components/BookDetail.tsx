import React from 'react'

const BookDetail = () => {
  return (
    <div className='container mx-auto my-12'>
        <div className='flex py-4 px-4 rounded gap-8'>
            <img src="https://www.dbooks.org/img/books/1503212300s.jpg" className='shadow-2xl' alt="" />
            <div>
                <div className='mb-4'>
                    <h1 className='text-2xl font-bold'>Invent Your Own Computer Games with Python</h1>
                    <h2 className='text-xl font-semibold'>A beginner's guide to computer programming in Python</h2>
                </div>
                <div className='mb-4'>
                    <p>Invent Your Own Computer Games with Python teaches you how to program in the Python language...</p>
                </div>
                <div>
                    <div className='flex'>
                        <h3 className='basis-1/4 uppercase font-bold'>Authors </h3>
                        <h4 className='basis-1/4'>Al Sweigart</h4>
                    </div>
                    <div className='flex'>
                        <h3 className='basis-1/4 uppercase font-bold'>Publisher </h3>
                        <h4 className='basis-1/4'>CreateSpace</h4>
                    </div>
                    <div className='flex'>
                        <h3 className='basis-1/4 uppercase font-bold'>Pages </h3>
                        <h4 className='basis-1/4'>367 Pages</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetail