import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import moviesServ from './services/movies'
import './tailwind.output.css'

const App = () => {
  const [ movies, setMovies] = useState([])

  useEffect(() => {

    moviesServ
    .getAll()
    .then((response) => {
      console.log('promise fullfilled')
      setMovies(response.data)
    })
  }, [])

  return(
    <div className="">
      <div className=" font-sans">
        <Header />
        <section>
          <MovieList flicks={movies} />
        </section>
      </div>
    </div>
    
  )
  
}

export default App;
