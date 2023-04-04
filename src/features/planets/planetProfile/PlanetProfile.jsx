import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PlanetExcerpt from "./PlanetExcerpt";
import {getEntityError, getEntityStatus, loadProfile, selectEntity} from "../../profile/profileSlice";

const PlanetProfile = () => {
    const {planetId} = useParams()
    const dispatch = useDispatch()

    const planet = useSelector(selectEntity)
    const status = useSelector(getEntityStatus)
    const error = useSelector(getEntityError)

    useEffect(() => {
        dispatch(loadProfile({entityId: planetId, name: 'planets'}))
    }, [planetId])

    let content
    if (status === 'pending') {
        content = <p>Pending...</p>
    } else if (status === 'idle') {
        content = <PlanetExcerpt {...planet} planetId={planetId} />
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <div className={'container'}>
            {content}
        </div>
    );
};

export default PlanetProfile;