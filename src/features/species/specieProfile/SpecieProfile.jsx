import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SpecieExcerpt from "./SpecieExcerpt";
import {getEntityError, getEntityStatus, loadProfile, selectEntity} from "../../profile/profileSlice";

const SpecieProfile = () => {
    const {specieId} = useParams()
    const dispatch = useDispatch()

    const specie = useSelector(selectEntity)
    const status = useSelector(getEntityStatus)
    const error = useSelector(getEntityError)

    useEffect(() => {
        dispatch(loadProfile({entityId: specieId, name: 'species'}))
    }, [specieId])

    let content

    if (status === 'pending') {
        content = <p>Pending...</p>
    } else if (status === 'idle') {
        content = <SpecieExcerpt specieId={specieId} {...specie} />
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <div className={'container'}>
            {content}
        </div>
    );
};

export default SpecieProfile;