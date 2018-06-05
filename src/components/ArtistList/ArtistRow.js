//Row in the artist list with all elements shown on wireframe

//REVEAL COMPONENT is what you need 

import React from 'react';
import {Dimmer, Segment, Grid, Button, Icon, Header} from 'semantic-ui-react';

class ArtistRow extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.handleEntry = this.handleEntry.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }
    handleEntry() {
        this.setState({active: true});
    }

    handleLeave() {
        this.setState({active: false});
    }

    render() {
        const content = (
            <div>
              <Header as='h2' inverted>
                Maximus D00d
              </Header>
      
              <Button primary onClick={()=>{alert("take user to artist page")}}>View Artist</Button>
            </div>
          )
        
        const active = this.state.active;

        return (
            <Dimmer.Dimmable as={Segment} dimmed={active} 
                        onMouseEnter={this.handleEntry} onMouseLeave={this.handleLeave}>
                <Dimmer  active={active}  content={content} onClick= {()=>{/*alert("taking user to page")*/}}/>
                <Grid stackable columns={3} textAlign='center' stretched verticalAlign = 'middle'>
                    <Grid.Row  >
                    <Grid.Column  floated = 'left' mobile = {16} tablet= {8} computer = {3}>
                        <Segment >
                            <img  className="App-logo" alt="logo" onClick = {() => {alert("Take user to idx page")}}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column only="computer"  computer = {10}>
                        <Segment >Artist Maximus d00d </Segment>
                    </Grid.Column>
                    <Grid.Column   floated='right' mobile = {16} tablet= {8} computer = {3}>
                        <Segment  >
                            <Button.Group>
                                <Button animated='vertical'  color= "blue" onClick={() => {alert('Help/About page')}}>
                                    <Button.Content hidden>
                                        Help
                                    </Button.Content>
                                    <Button.Content visible>
                                        <Icon name='help' />
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                        </Segment>
                    </Grid.Column >
                    </Grid.Row>
                </Grid>
            </Dimmer.Dimmable>

        );
    }
}

export default ArtistRow;
