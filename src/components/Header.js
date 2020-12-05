import React from 'react';
import Filter from './Filter'


const Header = ({ val, andler }) => {
    return(

        <section>
            <div className='bg-opacity-50 bg-gray-900 curved  z-10 '>
                <div className=" container mx-auto mb-8 h-16 z-10 block">
                    <h1 className="float-left  "><img style={{ height:"150px" }} src='https://res.cloudinary.com/dbureb5gj/image/upload/v1607090749/catch%20a%20flick/Catch_A_Flick_Logo__3_-removebg-preview_rborla.png' alt='' /></h1>
                    <ul className='float-right mt-14 space-x-6 text-3xl text-yellow-400'>
                        <li className="inline-block ">Movies</li>
                        <li className="inline-block ">TV</li>
                    </ul>
                </div>
                <div className='  mt-24 container mx-auto text-center'>
                    <div className= "text-gray-300">
                        <h2 className=" mb-5 font-semibold text-4xl">Watch the Latest</h2>
                        <p className="font-medium text-3xl">Filter through the newest releases from Hollywood,
                        <br/> Tv  studios as well as Watch on demand Services
                        </p>
                        <Filter val ={val} andler={andler} />
                    </div>
                    
                </div>
            </div>
            <div className=" absolute inset-x-0 top-0 curved z-0">
                    <img className="mas" src="https://res.cloudinary.com/dbureb5gj/image/upload/v1607081415/catch%20a%20flick/background_l3f3hk.jpg" alt=''  />
            </div>
        </section>
        
        

    )
}

export default Header;