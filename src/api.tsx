import axios from "axios";

export const getAllData = async () => {
    const response = await axios.get("https://www.dbooks.org/api/recent")
    console.log(response.data)
}

export const getSearchData = async (item: string) => {
    const response = await axios.get(`https://www.dbooks.org/api/search/${item}`)
    console.log(response.data)
}

export const getDetailData = async (id: number) => {
    const response = await axios.get(`https://www.dbooks.org/api/book/${id}`)
    console.log(response.data)
}