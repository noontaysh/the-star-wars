import React from 'react';
import './styles/PersonCard.scss'
import {NavLink} from "react-router-dom";

const PersonCard = ({id, ...props}) => {
    return (
        <NavLink to={`/people/${id}`} className={'character'}>
            <section>
                <div className={'character__image'}>
                    {/*images were taken from this site https://starwars-visualguide.com/#/characters?page=1, cause SWAPI doesn't have its own*/}
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={props.name}
                         onError={(e) => {
                             e.target.onError = null;
                             e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                         }}/>
                </div>
                <div className="character__content">
                    <h3>{props.name}</h3>
                    {/*<div className={'character__paragraphs'}>*/}
                    {/*    <p>{props.birth_year}</p>*/}
                    {/*    <p>{props.mass}{props.mass !== 'unknown' ? 'kg' : ''}</p>*/}
                    {/*</div>*/}
                </div>
            </section>
        </NavLink>
    );
};

export default PersonCard;