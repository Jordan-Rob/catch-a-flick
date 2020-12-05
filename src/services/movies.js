import axios from 'axios'
import env from "react-dotenv";

//const baseUrl = 'http://localhost:3001/movies'
const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${env.API_KEY}`


const getAll = () => {
    return axios.get(baseUrl)
}

export default {getAll};