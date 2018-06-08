//List of artists shown on landing page and actively filtered using the user's input and/or tags
//Table used due to ease of sortability! May be updated as time goes by

import React from 'react';
import ArtistRow from './ArtistRow';
import { Grid, Segment } from 'semantic-ui-react';

class ArtistList extends React.Component 
{

    getResultList() {
        return;
    }

    //Refactor required.
    render() {
        return (
            <div>
                    <Segment.Group compact>
                        <ArtistRow />
                        <ArtistRow />
                        <ArtistRow />
                    </Segment.Group>
                {this.getResultList()}
            </div>
        );
    }
}

export default ArtistList;