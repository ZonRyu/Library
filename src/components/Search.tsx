import { useEffect, useState } from "react"
import { getSearchData, RespApi } from "../api"
import Shelf from "./Shelf"
import { useParams } from "react-router-dom"
import Loading from "./Loading"
import NotFound from "./NotFound"

const Search = () => {
  const {name} = useParams()
  const [respApi, setRespApi] = useState<RespApi>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    getSearchData(name).then((resp) => setRespApi(resp)).then(() => setIsLoading(false))
  }, [name])

  if(isLoading) return <Loading />

  if(respApi?.status === 'not found') return <NotFound />

  return (
    <div className='container mx-auto mt-12'>
      <div className="text-3xl text-center font-bold">
        <h1>Result for: {name}</h1>
      </div>
      <Shelf books={respApi?.books} />
    </div>
  )
}

export default Search