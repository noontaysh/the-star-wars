import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadCharacter, selectCharacter} from "./characterSlice";

const CharacterProfile = () => {
    const {characterId} = useParams()
    const dispatch = useDispatch()

    const character = useSelector(selectCharacter)

    useEffect(() => {
        dispatch(loadCharacter(characterId))
    }, [characterId])

    return (
        <div>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} alt=""/>
            <div>
                <h1>{character.name}</h1>
                <p>Birth year: {character.birth_year}</p>
                <p>Height: {character.height}cm</p>
                <p>Mass: {character.mass}kg</p>
                <p>Gender: {character.gender}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Skin Color: {character.skin_color}</p>

            </div>
        </div>
    );
};

export default CharacterProfile;