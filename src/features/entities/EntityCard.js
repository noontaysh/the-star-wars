import React from 'react';
import PlanetCard from "../../components/planets/PlanetCard";
import PersonCard from "../../components/people/PersonCard";
import SpecieCard from "../../components/species/SpecieCard";
import StarshipCard from "../../components/starships/StarshipCard";

const EntityCard = ({entityId, path, ...props}) => {
    const purePath = path.replace(/\//g, '') // to get only the path name
    switch (purePath) {
        case 'planets': return <PlanetCard {...props} id={entityId} />
        case 'people': return <PersonCard {...props} id={entityId}/>
        case 'species': return <SpecieCard {...props} id={entityId}/>
        case 'starships': return <StarshipCard {...props} id={entityId} />
        default: return undefined
    }
};

export default EntityCard;