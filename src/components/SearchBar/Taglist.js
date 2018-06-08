//List of current tags/ search modifiers being used by the end user. deletable tags.


import React from 'react';
import {Label} from 'semantic-ui-react';

class TagList extends React.Component 
{


    render() {
        //Consider replacing with segment
        return (
            <div>
                <Label as='a' color='blue' image>
                    American
                    <Label.Detail>Ink Filter</Label.Detail>
                    </Label>
                    <Label as='a' color='teal' image>
                    Montreal
                    <Label.Detail>City</Label.Detail>
                    </Label>
                    <Label as='a' color='yellow' image>
                    Minimalist
                    <Label.Detail>Ink Filter</Label.Detail>
                    </Label>
            </div>
        );
    }
}

export default TagList;
