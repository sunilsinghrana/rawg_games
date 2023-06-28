import axios from "axios"

const key : string = "096a3079b38c459a9070970526967070"
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId =(id:number)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}