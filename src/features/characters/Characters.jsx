import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchCharacters,
    getCharactersError,
    getCharactersStatus,
    pageChanged,
    selectAllCharacters
} from "./charactersSlice";
import Character from "./Character";
import './Characters.scss'
import '../../common/Container.scss'
import {getId} from "../../utilities/getImageById";
import Paginator from "./Paginator";

const Characters = () => {
    const characters = useSelector(selectAllCharacters)
    // selectAllCharacters is the selector we made earlier in characterSlice
    const status = useSelector(getCharactersStatus)
    const error = useSelector(getCharactersError)
    const page = useSelector(state => state.characters.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCharacters(page))
    }, [page])

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

    const paginate = (pageNumber) => {
        dispatch(pageChanged(pageNumber))
    };

    return (
        <div className={'container characters'}>
            <h1 className={'characters__title'}>Characters</h1>
            <Paginator currentPage={page} paginate={paginate}/>
            <div className={'characters__content'}>
                {content}
            </div>
        </div>
    );
};

export default React.memo(Characters);