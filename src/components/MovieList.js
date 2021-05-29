import React from 'react';
import Movie from './Movie'

const MovieList = ({flicks}) => {
    return(
        <div className='container mx-auto mt-16 grid  lg:grid-cols-8 md:grid-cols-4  sm:grid-cols-2  gap-x-3 gap-y-2'>
            
            {flicks.map( flick => <Movie key={flick.id} flick={flick} />)}
            
        </div>
    )
}

export default MovieList;