import axios from 'axios'
import env from 'react-dotenv'

const baseUrl = `https://api.themoviedb.org/3/tv/latest?api_key=${env.API_KEY}&language=en-US`

const getSeries = () => {
    return axios.get(baseUrl)
}

export default getSeries