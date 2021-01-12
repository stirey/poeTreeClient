import React from 'react';
import { Button, NavItem } from 'reactstrap';

const StudentView = (props) => {

    return (
        <div>
            <div>
            
            <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button> 
            </NavItem>
                       
            </div>
        </div>
    )
}

export default StudentView;