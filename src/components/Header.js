//Universal Header

import React from 'react';
import { Button, Grid, Segment, Icon } from 'semantic-ui-react';
import logo from '../logo.svg'
import Modal_LogIn from './Modal_LogIn';
class Header extends React.Component 
{

    renderLogin() {
        let button=<Modal_LogIn />
        if(this.props.username !== undefined) {
            button = <Button secondary onClick={()=>{alert(`Take ${this.props.username} to profile`)}}>
                        <Icon name="user" inverted color="white" size="large"/>
                        My Profile
                    </Button>
        } 

        return button;
    }

    render() {
        return (
            <div>
                <Segment>
                 <Grid stackable columns={3} textAlign='center' stretched verticalAlign = 'middle'>
                    <Grid.Row  >
                    <Grid.Column  floated = 'left' mobile = {16} tablet= {8} computer = {3}>
                        <Segment basic>
                            <Icon name="compass" className="App-logo" size="huge" onClick = {() => {alert("Take user to idx page")}}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column only="computer"  computer = {10}>
                        <Segment basic>
                            <h1>INK INDEX</h1> 
                        </Segment>
                    </Grid.Column>
                    <Grid.Column   floated='right' mobile = {16} tablet= {8} computer = {3}>
                        <Segment  basic>
                            <Button.Group>
                                {this.renderLogin()}
                                <Button animated='vertical'  basic color="black" onClick={() => {alert('Help/About page')}}>
                                    <Button.Content hidden>
                                        Help
                                    </Button.Content>
                                    <Button.Content visible>
                                        <Icon name='help' size="large"/>
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                        </Segment>
                    </Grid.Column >
                    </Grid.Row>
                </Grid>
                </Segment>
            </div>
        );
    }
}

export default Header;