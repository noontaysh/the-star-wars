import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPlanetError, getPlanetStatus, loadPlanet, selectPlanet} from "./planetSlice";
import PlanetExcerpt from "./PlanetExcerpt";

const PlanetProfile = () => {
    const {planetId} = useParams()
    const dispatch = useDispatch()

    const planet = useSelector(selectPlanet)
    const status = useSelector(getPlanetStatus)
    const error = useSelector(getPlanetError)

    useEffect(() => {
        dispatch(loadPlanet(planetId))
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