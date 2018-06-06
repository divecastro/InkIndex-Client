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
                <Grid columns={3} textAlign='center' stretched verticalAlign = 'middle'>
                    <Grid.Row>
                        {/* <Grid.Column only="computer" computer = {1}>
                            <Segment />
                        </Grid.Column> */}
                        <Grid.Column mobile = {16} tablet= {16} computer = {16}>
                        <ArtistRow />
                        <ArtistRow />
                        <ArtistRow />
                        </Grid.Column>
                        {/* <Grid.Column only="computer" computer = {1}>
                            <Segment />
                        </Grid.Column> */}
                    </Grid.Row>
                
                </Grid>
                {this.getResultList()}
            </div>
        );
    }
}

export default ArtistList;