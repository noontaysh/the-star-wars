import React from 'react';
import {numberWithCommas} from "../../../utilities/numbersWithComas";

const VehiclesExcerpt = ({objectId, ...props}) => {
    return (
        <div className={'excerpt'}>
            <img src={`https://starwars-visualguide.com./assets/img/vehicles/${objectId}.jpg`} alt=""
                 onError={(e) => {
                     e.target.onError = null;
                     e.target.src = `https://starwars-visualguide.com/./assets/img/big-placeholder.jpg`
                 }}/>
            <div className={'excerpt__content'}>
                <h1>{props.name}</h1>
                <p>Model: {props.model}</p>
                <p>Cost: {numberWithCommas(props.cost_in_credits)} {props.cost_in_credits !== 'unknown' && 'credits'}</p>
                <p>Max Speed: {numberWithCommas(props.max_atmosphering_speed && props.max_atmosphering_speed.replace('km', ''))}{props.max_atmosphering_speed !== 'n/a' && 'km/h'}</p>
                <p>Crew: {props.crew}</p>
                <p>Length: {numberWithCommas(props.length)}{props.length !== 'unknown' && 'm'}</p>
                <p>Cargo Capacity: {numberWithCommas(props.cargo_capacity)}</p>
                <p>Passengers: {numberWithCommas(props.passengers)}</p>
            </div>
        </div>
    );
};

export default VehiclesExcerpt;