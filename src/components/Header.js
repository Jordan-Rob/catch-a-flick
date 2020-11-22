import React from 'react';

const Header = () => {
    return(
        <div className="mb-8 h-16">
            <h1 className="float-left mt-8 text-3xl font-bold text-blue-900">Catch A Flick</h1>
            <ul className='float-right mt-8 space-x-6 text-3xl'>
                <li className="inline-block text-yellow-500">Movies</li>
                <li className="inline-block text-blue-500">TV</li>
            </ul>
        </div>

    )
}

export default Header;