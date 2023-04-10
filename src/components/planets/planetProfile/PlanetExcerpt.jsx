import React from 'react';
import {numberWithCommas} from "../../../utilities/numbersWithComas";

const PlanetExcerpt = ({objectId, ...props}) => {
    return (
        <div className={'excerpt'}>
            <img src={`https://starwars-visualguide.com./assets/img/planets/${objectId}.jpg`} alt=""
                 onError={(e) => {
                     e.target.onError = null;
                     e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                 }}/>
            <div className={'excerpt__content'}>
                <h1>{props.name}</h1>
                <p>Population: {numberWithCommas(props.population)}</p>
                <p>Diameter: {numberWithCommas(props.diameter)}{props.diameter !== 'unknown' ? 'km' : ''}</p>
                <p>Rotation Period: {numberWithCommas(props.rotation_period)} {props.rotation_period !== 'unknown' ? 'days' : ''}</p>
                <p>Orbital Period: {numberWithCommas(props.orbital_period)} {props.orbital_period !== 'unknown' ? 'days' : ''}</p>
                <p>Gravity: {props.gravity}</p>
                <p>Surface Water: {props.surface_water}{props.surface_water !== 'unknown' ? '%' : ''}</p>
                <p>Terrain: {props.terrain}</p>
                <p>Climate: {props.climate}</p>
            </div>
        </div>
    );
};

export default PlanetExcerpt;