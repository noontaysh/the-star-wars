import React from 'react';

const SpecieExcerpt = ({specieId, ...props}, ) => {
    console.log(props)
    return (
        <div className={''}>
            <img src={`https://starwars-visualguide.com./assets/img/species/${specieId}.jpg`} alt=""
                 onError={(e) => {
                     e.target.onError = null;
                     e.target.src = `https://starwars-visualguide.com/./assets/img/placeholder.jpg`
                 }}/>
            <div className={''}>
                <h1>{props.name}</h1>
                <p>Classification: {props.classification}</p>
                <p>Designation: {props.designation}</p>
                <p>Language: {props.language}</p>
                <p>Avg Lifespan: {props.average_lifespan} {props.average_lifespan !== 'unknown' && 'years'}</p>
                <p>Avg Height: {props.average_height}{props.average_height !== 'unknown' && 'cm'}</p>
                <p>Hair Color(s): {props.hair_colors}</p>
                <p>Skin Color(s): {props.skin_colors}</p>
                <p>Eye Color(s): {props.eye_colors}</p>
            </div>
        </div>
    );
};

export default SpecieExcerpt;