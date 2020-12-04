import React from 'react';


const Header = () => {
    return(
        <div className='bg-white curved '>
            <div className="container mx-auto mb-8 h-16 z-10 block">
                <h1 className="float-left mt-8 text-3xl font-bold text-blue-900">Catch A Flick</h1>
                <ul className='float-right mt-8 space-x-6 text-3xl'>
                    <li className="inline-block text-yellow-500">Movies</li>
                    <li className="inline-block text-blue-500">TV</li>
                </ul>
            </div>
            <div className=' container mx-auto h-56 bg-fixed  flex'>
                <div>
                    <h2>Watch the Latest</h2>
                    <p>Filter through the newest releases from Hollywood,
                       <br/> Tv  studios as well as Watch on demand Services
                    </p>
                    <input />
                </div>
                <div >
                    <img style={{ height:"250px" }} src='https://res.cloudinary.com/dbureb5gj/image/upload/v1607072895/catch%20a%20flick/undraw_home_cinema_l7yl_tqasof.png' />
                </div>
            </div>
        </div>
        

    )
}

export default Header;