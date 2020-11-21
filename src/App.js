import React, {useState, useEffect} from 'react'
import MovieList from './components/MovieList'
import Header from './components/Header'
import './App.css';

function App() {
  const [ movies, setMovies] = useState([])


  return(
    <div>
      <Header />

      <section>
        <MovieList />
      </section>
    </div>
  )
  
}

export default App;
