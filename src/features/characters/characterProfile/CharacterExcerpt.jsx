import React from 'react';
import './styles/CharacterProfile.scss'

const CharacterExcerpt = (props) => {
    return (
        <div className={'characterProfile'}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.characterId}.jpg`} alt=""/>
            <div className={'characterProfile__content'}>
                <h1>{props.name}</h1>
                <p>Birth year: {props.birth_year}</p>
                <p>Height: {props.height}cm</p>
                <p>Mass: {props.mass}kg</p>
                <p>Gender: {props.gender}</p>
                <p>Hair Color: {props.hair_color}</p>
                <p>Skin Color: {props.skin_color}</p>
            </div>
        </div>
    );
};

export default CharacterExcerpt;