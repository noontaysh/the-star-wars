import React from 'react';
import './styles/SpecieCard.scss'
import {NavLink} from "react-router-dom";

const SpecieCard = ({id, ...props}) => {
    return (
        <NavLink to={`/species/${id}`} className={'specie'}>
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
        </NavLink>
    );
};

export default SpecieCard;