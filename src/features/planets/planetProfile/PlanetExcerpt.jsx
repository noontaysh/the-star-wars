import React from 'react';
import {numberWithCommas} from "../../../utilities/numbersWithComas";

const PlanetExcerpt = (props) => {
    return (
        <div className={''}>
            <img src={`https://starwars-visualguide.com./assets/img/planets/${props.planetId}.jpg`} alt=""
                 onError={(e) => {
                     e.target.onError = null;
                     e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                 }}/>
            <div className={''}>
                <h1>{props.name}</h1>
                <p>Population: {numberWithCommas(props.population)}</p>
                <p>Diameter: {props.diameter}{props.diameter !== 'unknown' ? 'km' : ''}</p>
                <p>Rotation Period: {props.rotation_period} {props.rotation_period !== 'unknown' ? 'days' : ''}</p>
                <p>Orbital Period: {props.orbital_period} {props.orbital_period !== 'unknown' ? 'days' : ''}</p>
                <p>Gravity: {props.gravity}</p>
                <p>Surface Water: {props.surface_water}{props.surface_water !== 'unknown' ? '%' : ''}</p>
                <p>Terrain: {props.terrain}</p>
                <p>Climate: {props.climate}</p>
            </div>
        </div>
    );
};

export default PlanetExcerpt;