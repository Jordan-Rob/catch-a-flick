import React from 'react';

const Filter = ({ val, andler}) => {
    

    return(
        <input onChange={andler} value={val} placeholder="filter..." className= " mt-10 rounded-full py-3 px-6 rounded-full py-3 px-6" />
    )
}

export default Filter;
