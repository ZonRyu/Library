import Shelf from './Shelf'
import { BookCards } from '../api'

const Home = ({books} : {books: BookCards[]}) => {
  return (
    <Shelf books={books} />
  )
}

export default Home