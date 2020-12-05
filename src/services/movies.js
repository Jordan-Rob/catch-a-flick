import axios from 'axios'

//const baseUrl = 'http://localhost:3001/movies'
const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=774ec9058c393e35159f8ed33dc5d0f4'


const getAll = () => {
    return axios.get(baseUrl)
}

export default {getAll};