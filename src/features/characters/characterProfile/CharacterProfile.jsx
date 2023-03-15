import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCharacterError, getCharacterStatus, loadCharacter, selectCharacter} from "./characterSlice";
import CharacterExcerpt from "./CharacterExcerpt";
import '../../../common/Container.scss'

const CharacterProfile = () => {
    const {characterId} = useParams()
    const dispatch = useDispatch()

    const character = useSelector(selectCharacter)
    const status = useSelector(getCharacterStatus)
    const error = useSelector(getCharacterError)

    useEffect(() => {
        dispatch(loadCharacter(characterId))
    }, [characterId])

    let content
    if (status === 'loading') {
        content = <p>Loading...</p>
    } else if (status === 'succeeded') {
        content = <CharacterExcerpt {...character} characterId={characterId} />
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <div className={'container'}>
            {content}
        </div>
    );
};

export default CharacterProfile;