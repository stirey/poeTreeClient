import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Contact from '../site/Contact';
import TheApp from '../site/TheApp';
import TheMaker from '../site/TheMaker';
import ForTeachers from '../site/ForTeachers';


const HomePage = (props) => {
    
    return (
        <div>
            <div>
                <Switch>
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/theapp"><TheApp /></Route>
                <Route exact path="/themaker"><TheMaker /></Route>
                <Route exact path="/forteachers"><ForTeachers /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default HomePage;