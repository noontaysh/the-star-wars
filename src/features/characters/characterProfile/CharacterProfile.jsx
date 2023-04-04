import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CharacterExcerpt from "./CharacterExcerpt";
import '../../../common/Container.scss'
import {getEntityError, getEntityStatus, loadProfile, selectEntity} from "../../profile/profileSlice";

const CharacterProfile = () => {
    const {characterId} = useParams()
    const dispatch = useDispatch()

    const character = useSelector(selectEntity)
    const status = useSelector(getEntityStatus)
    const error = useSelector(getEntityError)

    useEffect(() => {
        dispatch(loadProfile({entityId: characterId, name: 'people'}))
    }, [characterId])

    let content
    if (status === 'pending') {
        content = <p>Loading...</p>
    } else if (status === 'idle') {
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