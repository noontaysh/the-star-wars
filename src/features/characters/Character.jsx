import React from 'react';
import './Character.scss'

const Character = ({characterCard, id}) => {
    return (

        <a className={'character'}>
            <section>
                <div className={'character__image'}>
                    {/*images were taken from this site https://starwars-visualguide.com/#/characters?page=1, cause SWAPI doesn't have its own*/}
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
                </div>
                <div className="character__content">
                    <h3>{characterCard.name}</h3>
                    <div className={'character__paragraphs'}>
                        <p>{characterCard.birth_year}</p>
                        <p>{characterCard.mass}</p>
                    </div>
                </div>
            </section>
        </a>
    );
};

export default Character;