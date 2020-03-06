import React from 'react';

const Searchbox = ({ searchchange })  => {
    return (
        <div className="mb4 mt4">
            <input 
            type="search" 
            placeholder="search robots" className="bg-light-blue pa2 ba b--green"
            onChange={searchchange}/>
        </div>
    )
}

export default Searchbox;