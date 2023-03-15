import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPlanets, getPlanetsError, getPlanetsStatus, selectAllPlanets} from "./planetsSlice";
import PlanetCard from "./PlanetCard";
import Paginator from "../characters/Paginator";
import {pageChanged} from "./planetsSlice";

const Planets = () => {
    const dispatch = useDispatch()

    const planets = useSelector(selectAllPlanets)
    const status = useSelector(getPlanetsStatus)
    const error = useSelector(getPlanetsError)

    const currentPage = useSelector(state => state.planets.currentPage)
    const totalCount = useSelector(state => state.planets.totalCount)
    const pageSize = useSelector(state => state.planets.pageSize)

    useEffect( () => {
        dispatch(fetchPlanets(currentPage))
    }, [currentPage])

    const paginate = (pageNumber) => {
        dispatch(pageChanged(pageNumber))
    };

    let content
    if (status === 'loading') {
        content = <p>"Loading..."</p>
    } else if (status === 'idle') {
        content = planets.map(planetCard => {
            return (
               <PlanetCard key={planetCard.name} {...planetCard} id={1} />
            )
        })
    } else if (status === 'failed') {
        content = <p>{error}</p>
    }
    return (
        <div>
            <Paginator currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} paginate={paginate}/>
            {content}
        </div>
    );
};

export default Planets;