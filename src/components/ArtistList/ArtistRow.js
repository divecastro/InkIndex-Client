//Row in the artist list with all elements shown on wireframe

//REVEAL COMPONENT is what you need 

import React from 'react';
import {Dimmer, Segment, Grid, Button, Icon, Header, Image} from 'semantic-ui-react';

import ex_image from './square-image.png';

class ArtistRow extends React.Component 
{
    constructor(props) {
        super(props);
        //replace isFavourite false with this.props.isfavourite
        this.state = {active: false, isFavourite: false};
        this.handleEntry = this.handleEntry.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
    }
    handleEntry() {
        this.setState({active: true});
    }

    handleLeave() {
        this.setState({active: false});
    }

    handleIconClick() {
        alert("Toggle favourite/unfave. Send API Command. Yeet");
        this.setState((prevState, props) => ({
            isFavourite: !prevState.isFavourite
          }));
    }
    render() {
        const content = (
            <Segment basic>
               <Grid stackable columns={3} textAlign='center' verticalAlign = 'middle'>
                    <Grid.Row  stretched>
                    <Grid.Column  mobile = {16} tablet= {8} computer = {2} 
                                    onClick = {this.handleIconClick}
                    >
                        <Segment basic>
                            <Icon name="heart" size="huge" color={this.state.isFavourite? "red" : false}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column  only="computer" computer = {4}
                                    onClick = {() => {alert("Take user to ARtist page")}}
                    >
                        <Grid centered>
                            <Grid.Row>
                                <h1>Jimmy Bobberson</h1>
                            </Grid.Row>
                            <Grid.Row>
                                <h2>Cool Bro Tattoo Studio</h2>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Coolstown, Metro City</h3>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column mobile = {16} tablet= {8} computer = {10}
                    >
                        <Grid centered onClick = {() => {alert("Take user to Artist page")}}>
                            <Grid.Row>
                                <Segment basic stretched />
                            </Grid.Row>
                            <Grid.Row>
                                    <h2>Click heart to favourite or here to view Artist profile!</h2>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment basic stretched />
                            </Grid.Row>
                        </Grid>

                    </Grid.Column >
                    </Grid.Row>
                </Grid>
            </Segment>
          )
        
        const active = this.state.active;
        //TODO URGENT: Move favouriting OUT of dimmer. We want users to be able to quick favourite
        return (
            <Dimmer.Dimmable as={Segment} 
                            basic
                            dimmed={active} 
                            onMouseEnter={this.handleEntry} 
                            onMouseLeave={this.handleLeave}>
                <Dimmer  active={active}  content={content} onClick= {()=>{/*alert("taking user to page")*/}}/>
                    <Grid stackable columns={3} textAlign='center' stretched verticalAlign = 'middle'>
                    <Grid.Row  >
                    <Grid.Column  mobile = {16} tablet= {6} computer = {2}>
                        <Segment basic>
                            <Icon name="heart" size="huge" color={this.state.isFavourite? "red" : false}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column   mobile = {16} tablet= {10}  computer = {4}>
                        <Grid centered>
                            <Grid.Row>
                                <h1>Jimmy Bobberson</h1>
                            </Grid.Row>
                            <Grid.Row>
                                <h2>Cool Bro Tattoo Studio</h2>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Coolstown, Metro City</h3>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column   floated='right' mobile = {16} tablet= {16} computer = {10}>
                        <Segment >
                            <Image.Group size="small">
                                <Image  src={ex_image} rounded bordered/>
                                <Image  src={ex_image} rounded bordered/>
                                <Image  src={ex_image} rounded bordered/>
                                <Image  src={ex_image} rounded bordered/>
                            </Image.Group>
                        </Segment>
                    </Grid.Column >
                    </Grid.Row>
                </Grid>
            </Dimmer.Dimmable>

        );
    }
}

export default ArtistRow;
