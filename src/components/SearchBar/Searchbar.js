//Key Search bar on index page. As shown on wireframe will allow search by either name/studio or tag/location. Tag list will be part of this

import React from 'react';
import ArtistGroupSearch from './ArtistGroupSearch'
import { Segment, Grid, Dropdown } from 'semantic-ui-react';
import TagList from './Taglist';

class  Searchbar extends React.Component 
{

    render() {
        const tempStateOptions = [{ key: 'AC', value: 'AC', text: 'American Classic' },
                                    { key: 'JP', value: 'JP', text: 'Japanese' },
                                    { key: 'NC', value: 'NC', text: 'Neo-Classical ' },
                                    { key: 'DS', value: 'DS', text: 'Drunk Studio lel' },
                                    { key: 'PM', value: 'PM', text: 'Post Modern' },
                                    ];

        return (
            <Grid stackable columns={3} textAlign='center' stretched verticalAlign = 'middle'>
                <Grid.Row>
                    <Grid.Column  tablet= {1} computer = {1}>
                        <Segment basic>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column mobile = {16} tablet= {14} computer = {14}>
                        <Segment >
                            <ArtistGroupSearch />
                            <br />
                            <Grid stackable columns={2} textAlign='center' stretched verticalAlign = 'middle'>
                                <Grid.Row>
                                    <Grid.Column mobile = {16} tablet= {16} computer = {8}>
                                        <TagList />
                                    </Grid.Column>
                                    <Grid.Column mobile = {16} tablet= {16} computer = {8}>
                                        <Segment>
                                            {/* Replace this guy with the proper component TagSearch */}
                                            <Dropdown 
                                                placeholder='Enter your filter or location' 
                                                search 
                                                selection 
                                                options={tempStateOptions}
                                                fluid
                                            />
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column  tablet= {1} computer = {1}>
                        <Segment basic>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Searchbar;