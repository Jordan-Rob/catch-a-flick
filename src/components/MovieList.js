import React from 'react';
import Movie from './Movie'

const MovieList = ({flicks}) => {
    return(
        <div className='container mx-auto mt-16 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 lg:grid-rows-3 md:grid-rows-2  sm:grid-rows-1 gap-12 '>
            
            {flicks.map( flick => <Movie key={flick.id} flick={flick} />)}
            
        </div>
    )
}

export default MovieList;