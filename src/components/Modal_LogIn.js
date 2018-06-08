
import React from 'react';
import {Modal, Button,Icon, Header} from 'semantic-ui-react';

class Modal_LogIn extends React.Component 
{
    render() {
        return (
            <div>
                {/* <Icon name="user" inverted color="white" size="large"/> */}
                <Modal trigger={<Button secondary > 
                        Basic Modal</Button>} basic size='small'>
                    <Header icon='archive' content='TODO TODO - LOGIN PAGE - TODO TODO' />
                    <Modal.Content>
                        <p>
                        Looks like this will become the new login page.
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' inverted>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </Modal.Actions>
                </Modal> 

            </div>
        );
    }
}

export default Modal_LogIn;
