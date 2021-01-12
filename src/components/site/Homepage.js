import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Contact from '../site/Contact';
import TheApp from '../site/TheApp';
import TheMaker from '../site/TheMaker';
import ForTeachers from '../site/ForTeachers';
import ArtsIntegration from '../site/ArtsIntegration'
import Login from '../auth/Login';


const HomePage = () => {
    
    return (
        <div>
            <div>
                <Switch>
                <Route exact path="/login"><Login /></Route>    
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/theapp"><TheApp /></Route>
                <Route exact path="/themaker"><TheMaker /></Route>
                <Route exact path="/forteachers"><ForTeachers /></Route>
                <Route exact path='/artsintegration'><ArtsIntegration /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default HomePage;