//Key Search bar on index page. As shown on wireframe will allow search by either name/studio or tag/location. Tag list will be part of this

import React from 'react';
import ArtistGroupSearch from './ArtistGroupSearch'
import { Segment, Grid } from 'semantic-ui-react';

class  Searchbar extends React.Component 
{


    render() {
        return (
            <Grid stackable columns={3} textAlign='center' stretched verticalAlign = 'middle'>
                <Grid.Row>
                    <Grid.Column  tablet= {1} computer = {3}>
                        <Segment >
                        </Segment>
                    </Grid.Column>
                    <Grid.Column mobile = {16} tablet= {14} computer = {10}>
                        <Segment >
                            <ArtistGroupSearch />
                            <br />
                            <Grid stackable columns={2} textAlign='center' stretched verticalAlign = 'middle'>
                                <Grid.Row>
                                    <Grid.Column mobile = {16} tablet= {16} computer = {8}>
                                        <Segment>
                                            Your list of filters will go here
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column mobile = {16} tablet= {16} computer = {8}>
                                        <Segment>
                                            {/* Replace this guy with the proper component TagSearch */}
                                            <ArtistGroupSearch />
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column  tablet= {1} computer = {3}>
                        <Segment >
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Searchbar;