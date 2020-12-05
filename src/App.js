import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import moviesServ from './services/movies'
import './tailwind.output.css'

const App = () => {
  const [ movies, setMovies] = useState([])
  const [ filter, setFilter] = useState('')


  useEffect(() => {

    moviesServ
    .getAll()
    .then((response) => {
      console.log('promise fullfilled')
      setMovies(response.data.results)
      console.log(movies)
    })
  }, [])


  const filtered = movies.filter( m => m.title.includes(filter) )
  console.log(filtered)

  const filterChange = (event) => {
    console.log(event.target.vaule)
    setFilter(event.target.value)
  }

  

  return(
    <div className="">
      <div className=" font-sans">
        <Header val={filter} andler={filterChange} />
        { 
          filtered.length < 1 ?    
          <section className="mt-14">
          <MovieList flicks={movies} /></section>:
          <section className="mt-14">
          <MovieList flicks={filtered} /></section>

        }
        <Footer />
    </div>
    </div>
    
  )
  
}

export default App;
