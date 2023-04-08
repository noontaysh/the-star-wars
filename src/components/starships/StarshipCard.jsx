import React from 'react';
import {NavLink} from "react-router-dom";
import './styles/StarshipCard.scss'

const StarshipCard = ({id, ...props}) => {
    return (
        <NavLink to={`/starships/${id}`} className={'starship'}>
            <div className={'starship__image'}>
                {/*images were taken from this site https://starwars-visualguide.com/#/species?page=1, cause SWAPI doesn't have its own*/}
                <img
                    src={`https://starwars-visualguide.com/./assets/img/starships/${id}.jpg`}
                    alt={props.model}
                    onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                    }}/>
            </div>
            <h3>{props.model}</h3>
        </NavLink>
    );
};

export default StarshipCard;