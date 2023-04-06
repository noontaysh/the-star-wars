import React from 'react';
import {NavLink} from "react-router-dom";
import charactersLogo from './imgs/characters.jpg'
import planetsLogo from './imgs/planets.webp'
import speciesLogo from './imgs/species.jpeg'
import shipsLogo from './imgs/ships.jpg'
import filmsLogo from './imgs/films.webp'
import vehiclesLogo from './imgs/vehicles.webp'
import './Root.scss'

const Root = () => {
    return (
        <div className={'root container'}>
            <div className={'root__item'}>
                <NavLink to={'/people/'}>
                    <img src={charactersLogo} alt=""/>
                    <h2>Characters</h2>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/planets/'}>
                    <img src={planetsLogo} alt=""/>
                    <h2>Planets</h2>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/species/'}>
                    <img src={speciesLogo} alt=""/>
                    <h2>Species</h2>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/starships/'}>
                    <img src={shipsLogo} alt=""/>
                    <h2>Starships</h2>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/vehicles/'}>
                    <img src={vehiclesLogo} alt=""/>
                    <h2>Vehicles</h2>
                </NavLink>
            </div>
            <div className={'root__item'}>
                <NavLink to={'/films/'}>
                    <img src={filmsLogo} alt=""/>
                    <h2>Films</h2>
                </NavLink>
            </div>
        </div>
    );
};

export default Root;