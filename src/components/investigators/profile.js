import React, { Component } from 'react';
import data from "./profiles.json"; 

import Top from "./componentes/sectionTop"
import Bottom from "./componentes/sectionBottom"


export default function Profile(){
    const profile=data.profiles[0]
    return(
        <div>
            <Top name={profile.name} description={profile.description} image={profile.image} />
            <Bottom 
                contact={profile.contact} links={profile.links} biography={profile.biography} research={profile.research}
                teaching={profile.teaching} service={profile.service}    />
        </div>
    )

}

