import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSpecies, getSpeciesError, getSpeciesStatus, pageChanged, selectAllSpecies} from "./speciesSlice";
import {getId} from "../../utilities/getImageById";
import Paginator from "../../components/Paginator/Paginator";
import SpecieCard from "./SpecieCard";
import './styles/Species.scss'

const Species = () => {
    const dispatch = useDispatch()

    const species = useSelector(selectAllSpecies)
    const status = useSelector(getSpeciesStatus)
    const error = useSelector(getSpeciesError)

    const currentPage = useSelector(state => state.species.currentPage)
    const totalCount = useSelector(state => state.species.totalCount)
    const pageSize = useSelector(state => state.species.pageSize)
    console.log(pageSize, totalCount, currentPage)

    useEffect(() => {
        const promise = dispatch(fetchSpecies(currentPage))
        return () => {
            promise.abort()
        }
    }, [currentPage])

    const paginate = (pageNumber) => {
        dispatch(pageChanged(pageNumber))
    }

    let content
    if (status === 'pending') {
        content = <p>Loading...</p>
    } else if (status === 'idle') {
        content = species.map(specieCard => {
            const specieId = getId(specieCard.url, 'species')
            return (
                <SpecieCard key={specieCard.name} id={specieId} {...specieCard} />
            )
        })
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <div className={'container species'}>
            <h1 className={'species__title'}>Species</h1>
            <Paginator currentPage={currentPage} paginate={paginate} totalCount={totalCount} pageSize={pageSize}/>
            <div className={'species__content'}>
                {content}
            </div>
        </div>
    );
};

export default Species;