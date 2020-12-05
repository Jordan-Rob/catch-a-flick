import React from 'react';

const Movie = ({flick}) => {
    const imUrl  = ` https://image.tmdb.org/t/p/w500${flick.poster_path} `

    return(
        <div className='text-gray-300 text-center'>
            <div>
                <img className='object-scale-down rounded-3xl ' src={imUrl}  />
            </div>
            <div className='mt-2  text-xl' >
                <p>{flick.title}</p>
            </div>
            <div className='pl-4 pb-4'>
                <p className='mt-2'>{flick.release_date}</p>
            </div>
        </div>
    )
}

export default Movie;