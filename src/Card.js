import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className="bg-light-green grow shadow-3 br3 dib pa3 ma2">
            <img alt="robots" src={`https://robohash.org/${id}?170x170`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;