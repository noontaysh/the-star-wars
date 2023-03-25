import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSpecieError, getSpecieStatus, loadSpecie, selectSpecie} from "./specieSlice";
import SpecieExcerpt from "./SpecieExcerpt";

const SpecieProfile = () => {
    const {specieId} = useParams()
    const dispatch = useDispatch()

    const specie = useSelector(selectSpecie)
    const status = useSelector(getSpecieStatus)
    const error = useSelector(getSpecieError)

    useEffect(() => {
        dispatch(loadSpecie(specieId))
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
        <div>
            {content}
        </div>
    );
};

export default SpecieProfile;