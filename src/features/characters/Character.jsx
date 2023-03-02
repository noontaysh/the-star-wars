import React from 'react';

const Character = ({characterCard}) => {
    return (
        <section>
            <img src="" alt=""/>
            <h3>{characterCard.name}</h3>
            <div>
                <p>{characterCard.birth_year}</p>
                <p>{characterCard.mass}</p>
            </div>
        </section>
    );
};

export default Character;