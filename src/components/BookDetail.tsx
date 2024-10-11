import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Book, getDetailData } from "../api"
import { decode } from "html-entities"
import Loading from "./Loading"

const BookDetail = () => {
  const {id} = useParams()
  const [book, setBook] = useState<Book>()


  useEffect(() => {
    getDetailData(Number(id)).then((resp) => setBook(resp))
  }, [])


  if(!book) return <Loading />

  return (
    <div className='container mx-auto my-12'>
        <div className='flex py-4 px-4 rounded gap-8'>
            <img src={book?.image} className='shadow-2xl' alt={book?.title} />
            <div>
                <div className='mb-4'>
                    <h1 className='text-2xl font-bold'>{decode(book?.title)}</h1>
                    <h2 className='text-xl font-semibold'>{book?.subtitle}</h2>
                </div>
                <div className='mb-4'>
                    <p>{decode(book?.description)}</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className='flex'>
                        <h3 className='basis-1/4 uppercase font-bold'>Authors </h3>
                        <h4 className='basis-3/4'>{book?.authors}</h4>
                    </div>
                    <div className='flex'>
                        <h3 className='basis-1/4 uppercase font-bold'>Publisher </h3>
                        <h4 className='basis-3/4'>{decode(book?.publisher)}</h4>
                    </div>
                    <div className='flex'>
                        <h3 className='basis-1/4 uppercase font-bold'>Pages </h3>
                        <h4 className='basis-3/4'>{book?.pages} Pages</h4>
                    </div>
                    <div className='flex'>
                        <h3 className='basis-1/4 uppercase font-bold'>Year </h3>
                        <h4 className='basis-3/4'>{book?.year}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetail