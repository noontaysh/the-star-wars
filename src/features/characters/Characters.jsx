import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchCharacters,
    getCharactersError,
    getCharactersStatus,
    pageChanged,
    selectAllCharacters
} from "./charactersSlice";
import Character from "./Character";
import './styles/Characters.scss'
import '../../common/Container.scss'
import {getId} from "../../utilities/getImageById";
import Paginator from "./Paginator";

const Characters = () => {
    const dispatch = useDispatch()

    // selectAllCharacters is the selector we made earlier in characterSlice
    const characters = useSelector(selectAllCharacters)
    const status = useSelector(getCharactersStatus)
    const error = useSelector(getCharactersError)
    console.log(status)
    const totalCount = useSelector(state => state.characters.totalCount)
    const currentPage = useSelector(state => state.characters.currentPage)

    useEffect(() => {
        const promise = dispatch(fetchCharacters(currentPage))
        return () => {
            promise.abort()
        }
    }, [currentPage])

    const paginate = (pageNumber) => {
        dispatch(pageChanged(pageNumber))
    };

    let content;
    if (status === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (status === 'idle') {
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
        <div className={'container characters'}>
            <h1 className={'characters__title'}>Characters</h1>
            <Paginator currentPage={currentPage} paginate={paginate} totalCount={totalCount}/>
            <div className={'characters__content'}>
                {content}
            </div>
        </div>
    );
};

export default Characters;