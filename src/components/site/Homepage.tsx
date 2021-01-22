import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Contact from './Contact';
import TheApp from './TheApp';
import TheMaker from './TheMaker';
import ForTeachers from './ForTeachers';
import ArtsIntegration from './ArtsIntegration'
import Login from '../auth/Login';


type AppProps = {
    
  }
  

class HomePage extends React.Component<AppProps,{} >{
    constructor(props: AppProps){
        super(props);

    } 

    render() {
    return (
        <div>
            <div>
                <Switch>    
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
}

export default HomePage;