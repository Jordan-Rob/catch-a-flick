import React from 'react';

const Footer = () => {
    return (
        <section className=' mt-16 py-12 h-40 bg-gray-700' >
            <div className='container mx-auto text-gray-300 text-xl '>
                <p className='float-left '> catch a flick &#169; 2020 </p>
                <p className='float-right'> Powered by <img style={{ height:"70px" }} src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' alt ='' /> </p>
            </div>
        </section>
    )
}

export default Footer