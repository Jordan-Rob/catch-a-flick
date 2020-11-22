import React from 'react';
import Movie from './Movie'

const MovieList = ({flicks}) => {
    return(
        <div className='ml-20 mt-16 grid grid-flow-row grid-cols-3 grid-rows-3 gap-12'>
            
            {flicks.map( flick => <Movie key={flick.id} flick={flick} />)}
            
        </div>
    )
}

export default MovieList;