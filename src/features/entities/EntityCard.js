import React from 'react';
import PlanetCard from "../planets/PlanetCard";
import CharacterCard from "../characters/CharacterCard";
import SpecieCard from "../species/SpecieCard";

const EntityCard = ({entityId, path, ...props}) => {
    const purePath = path.replace(/\//g, '') // to get only the path name
    switch (purePath) {
        case 'planets': return <PlanetCard {...props} id={entityId} />
        case 'people': return <CharacterCard {...props} id={entityId}/>
        case 'species': return <SpecieCard {...props} id={entityId}/>
        default: return undefined
    }
};

export default EntityCard;