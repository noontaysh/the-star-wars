import React from 'react';
import './styles/SpecieCard.scss'

const SpecieCard = ({id, ...props}) => {
    return (
        <div className={'specie'}>
            <div className={'specie__image'}>
                {/*images were taken from this site https://starwars-visualguide.com/#/species?page=1, cause SWAPI doesn't have its own*/}
                <img
                    src={`https://starwars-visualguide.com/./assets/img/species/${id}.jpg`}
                    alt={props.name}
                    onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                    }}/>
            </div>
            <h3>{props.name}</h3>
        </div>
    );
};

export default SpecieCard;