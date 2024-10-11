import axios from "axios";

export interface Book {
    id: number,
    title: string
    subtitle: string,
    description: string,
    authors: string,
    publisher: string,
    pages: number,
    year: number,
    image: string,
    url: string,
}

export interface BookCards{
    id: number,
    title: string,
    image: string,
    link: string,
}

export interface RespApi {
    status: string,
    books: BookCards[]
}

export const getAllData = async () => {
    const response = await axios.get("https://www.dbooks.org/api/recent")
    return (await response.data.books) as BookCards[]
}

export const getSearchData = async (item: string | undefined) => {
    const response = await axios.get(`https://www.dbooks.org/api/search/${item}`)
    return (await response.data) as RespApi
}

export const getDetailData = async (id: number) => {
    const response = await axios.get(`https://www.dbooks.org/api/book/${id}`)
    return (await response.data) as Book
}