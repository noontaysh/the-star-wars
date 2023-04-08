import React from 'react';
import PlanetExcerpt from "../../components/planets/planetProfile/PlanetExcerpt";
import PersonExcerpt from "../../components/people/peopleProfile/PersonExcerpt";
import SpecieExcerpt from "../../components/species/specieProfile/SpecieExcerpt";

const ProfileExcerpt = ({path, objectId, ...props}) => {
    const purePath = path.replace(/\//g, '').replace(/[0-9]/g, '') // to get only the path name
    switch (purePath) {
        case 'planets': return <PlanetExcerpt {...props} objectId={objectId} />
        case 'people': return <PersonExcerpt {...props} objectId={objectId}/>
        case 'species': return <SpecieExcerpt {...props} objectId={objectId}/>
        default: return undefined
    }
};

export default ProfileExcerpt;