import React from 'react';
import './styles/StarshipExcerpt.scss'
import {numberWithCommas} from "../../../utilities/numbersWithComas";

const SpecieExcerpt = ({objectId, ...props}, ) => {
    return (
        <div className={'starship__profile'}>
            <img src={`https://starwars-visualguide.com./assets/img/starships/${objectId}.jpg`} alt=""
                 onError={(e) => {
                     e.target.onError = null;
                     e.target.src = `https://starwars-visualguide.com/./assets/img/big-placeholder.jpg`
                 }}/>
            <div className={'starship__content'}>
                <h1>{props.model}</h1>
                <p>Model: {props.model}</p>
                <p>Class: {props.starship_class}</p>
                <p>Cost: {numberWithCommas(props.cost_in_credits)} {props.cost_in_credits !== 'unknown' && 'credits'}</p>
                <p>Max Speed: {numberWithCommas(props.max_atmosphering_speed)}{props.max_atmosphering_speed !== 'n/a' && !props.max_atmosphering_speed.includes('km') && 'km/h'}</p>
                <p>Hyperdrive Rating: {props.hyperdrive_rating}</p>
                <p>MGLT: {props.MGLT}</p>
                <p>Length: {numberWithCommas(props.length)}{props.length !== 'unknown' && 'm'}</p>
                <p>Cargo Capacity: {numberWithCommas(props.cargo_capacity)}</p>
                <p>Passengers: {numberWithCommas(props.passengers)}</p>
            </div>
        </div>
    );
};

export default SpecieExcerpt;