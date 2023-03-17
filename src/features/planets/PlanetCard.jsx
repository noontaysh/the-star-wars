import React from 'react';
import './styles/Planet.scss'

const PlanetCard = ({id, ...props}) => {
    return (
        <div className={'planet'}>
            <div className={'planet__image'}>
                {/*images were taken from this site https://starwars-visualguide.com/#/characters?page=1, cause SWAPI doesn't have its own*/}
                <img
                    src={`https://starwars-visualguide.com/./assets/img/planets/${id}.jpg`}
                    alt=""
                    onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                    }}/>
            </div>
            <h3>{props.name}</h3>
        </div>
    );
};

export default PlanetCard;