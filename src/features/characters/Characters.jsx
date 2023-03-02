import React, {useEffect, useState} from 'react';
import {fetchCharacters, getCharactersError, getCharactersStatus, selectAllCharacters} from "./charactersSlice";
import Character from "./Character";
import {useDispatch, useSelector} from "react-redux";

const Characters = () => {
    const characters = useSelector(selectAllCharacters)
    // selectAllCharacters is the selector we made earlier in characterSlice
    const status = useSelector(getCharactersStatus)
    const error = useSelector(getCharactersError)
    const dispatch = useDispatch()

    useEffect(() => {
        status === 'idle' && dispatch(fetchCharacters())
    }, [status, dispatch])

    let content; // As we can see,
    if (status === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (status === 'succeeded') {
        content = characters.map(characterCard => <Character key={characterCard.name} characterCard={characterCard} />)
    } else if (status === 'failed') {
        content = <p>{error}</p>; // Here we explicitly catch the error, if there is one, then put it in the content that we display below
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default Characters;