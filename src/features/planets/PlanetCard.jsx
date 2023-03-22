import React from 'react';
import './styles/Planet.scss'
import {NavLink} from "react-router-dom";

const PlanetCard = ({id, ...props}) => {
    return (
        <NavLink to={`/planets/${id}`} className={'planet'}>
            <div className={'planet__image'}>
                {/*images were taken from this site https://starwars-visualguide.com/#/planets?page=1, cause SWAPI doesn't have its own*/}
                <img
                    src={`https://starwars-visualguide.com/./assets/img/planets/${id}.jpg`}
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

export default PlanetCard;