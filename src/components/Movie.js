import React from 'react';

const Movie = ({flick}) => {
    return(
        <div className='text-gray-300 text-center'>
            <div>
                <img className='object-scale-down rounded-3xl ' src={flick.poster} />
            </div>
            <div className='mt-2 pl-4 text-xl' >
                <p>{flick.title}</p>
            </div>
            <div className='pl-4 pb-4'>
                <p className='mt-2'>{flick.runtime}</p>
                <p>{flick.genre}</p>
            </div>
        </div>
    )
}

export default Movie;