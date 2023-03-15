import React from 'react';

const PlanetCard = ({id, ...props}) => {
    return (
        <div>
            <div>
                <img src="" alt=""/>
            </div>
                <h3>{props.name}</h3>
        </div>
    );
};

export default PlanetCard;