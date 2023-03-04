import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacters, getCharactersError, getCharactersStatus, selectAllCharacters} from "./charactersSlice";
import Character from "./Character";
import './Characters.scss'
import '../../common/Container.scss'
import {getId} from "../../utilities/getImageById";

const Characters = () => {
    const characters = useSelector(selectAllCharacters)
    // selectAllCharacters is the selector we made earlier in characterSlice
    const status = useSelector(getCharactersStatus)
    const error = useSelector(getCharactersError)
    const dispatch = useDispatch()

    useEffect(() => {
        status === 'idle' && dispatch(fetchCharacters())
    }, [status, dispatch])

    let content;
    if (status === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (status === 'succeeded') {
        content = characters.map(characterCard => {
            const id = getId(characterCard.url)
                return (
                    <Character key={characterCard.name} characterCard={characterCard} id={id}/>
                )
            }
        )
    } else if (status === 'failed') {
        content = <p>{error}</p>; // Here we explicitly catch the error, if there is one, then put it in the content that we display below
    }

    return (
        <div className={'characters container'}>
            {content}
        </div>
    );
};

export default Characters;