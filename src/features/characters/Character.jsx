import React from 'react';
import './styles/Character.scss'
import {NavLink} from "react-router-dom";

const Character = ({characterCard, id}) => {
    return (
        <NavLink to={`/characters/${id}`} className={'character'}>
            <section>
                <div className={'character__image'}>
                    {/*images were taken from this site https://starwars-visualguide.com/#/characters?page=1, cause SWAPI doesn't have its own*/}
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={characterCard.name}
                         onError={(e) => {
                             e.target.onError = null;
                             e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                         }}/>
                </div>
                <div className="character__content">
                    <h3>{characterCard.name}</h3>
                    <div className={'character__paragraphs'}>
                        <p>{characterCard.birth_year}</p>
                        <p>{characterCard.mass}{characterCard.mass !== 'unknown' ? 'kg' : ''}</p>
                    </div>
                </div>
            </section>
        </NavLink>
    );
};

export default Character;