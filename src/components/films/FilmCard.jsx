import React from 'react';
import {NavLink} from "react-router-dom";

const FilmCard = ({id, ...props}) => {
    return (
        <NavLink to={`/films/${id}`} className={'card'}>
            <div className={'card__image'}>
                {/*images were taken from this site https://starwars-visualguide.com/#/species?page=1, cause SWAPI doesn't have its own*/}
                <img
                    src={`https://starwars-visualguide.com/./assets/img/films/${id}.jpg`}
                    alt={props.title}
                    onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                    }}/>
            </div>
            <h3>{props.title}</h3>
        </NavLink>
    );
};

export default FilmCard;