//Universal Header

import React from 'react';
import { Button, Grid, Segment, Icon } from 'semantic-ui-react';
import logo from '../logo.svg'
class Header extends React.Component 
{

    renderLogin() {
        let button=<Button onClick={()=>{alert("Log in popup")}}>Log In</Button>;
        if(this.props.username !== undefined) {
            button = <Button onClick={()=>{alert(`Take ${this.props.username} to profile`)}}>My Profile</Button>
        } 

        return button;
    }

    render() {
        return (
            <div>
                 <Grid stackable columns={3} textAlign='center' stretched verticalAlign = 'middle'>
                    <Grid.Row  >
                    <Grid.Column  floated = 'left' mobile = {16} tablet= {8} computer = {3}>
                        <Segment >
                            <img src={logo} className="App-logo" alt="logo" onClick = {() => {alert("Take user to idx page")}}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column only="computer"  computer = {10}>
                        <Segment >INK INDEX </Segment>
                    </Grid.Column>
                    <Grid.Column   floated='right' mobile = {16} tablet= {8} computer = {3}>
                        <Segment  >
                            <Button.Group>
                                {this.renderLogin()}
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
            </div>
        );
    }
}

export default Header;