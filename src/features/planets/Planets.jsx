import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPlanets, getPlanetsError, getPlanetsStatus, selectAllPlanets} from "./planetsSlice";
import PlanetCard from "./PlanetCard";
import Paginator from "../../components/Paginator/Paginator";
import {pageChanged} from "./planetsSlice";
import {getId} from "../../utilities/getImageById";
import './styles/Planets.scss'

const Planets = () => {
    const dispatch = useDispatch()

    const planets = useSelector(selectAllPlanets)
    const status = useSelector(getPlanetsStatus)
    const error = useSelector(getPlanetsError)

    const currentPage = useSelector(state => state.planets.currentPage)
    const totalCount = useSelector(state => state.planets.totalCount)
    const pageSize = useSelector(state => state.planets.pageSize)

    useEffect(() => {
        const promise = dispatch(fetchPlanets(currentPage))
        return () => {
            promise.abort()
        }
    }, [currentPage])

    const paginate = (pageNumber) => {
        dispatch(pageChanged(pageNumber))
    };

    let content
    if (status === 'loading') {
        content = <p>"Loading..."</p>
    } else if (status === 'idle') {
        content = planets.map(planetCard => {
            const id = getId(planetCard.url, 'planets')
            return (
                <PlanetCard key={planetCard.name} {...planetCard} id={id}/>
            )
        })
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }
    return (
        <div className={'planets container'}>
            <h1 className={'planets__title'}>Planets</h1>
            <Paginator currentPage={currentPage} paginate={paginate} totalCount={totalCount} pageSize={pageSize}/>
            <div className={'planets__content'}>
                {content}
            </div>
        </div>
    );
};

export default Planets;