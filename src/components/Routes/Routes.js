import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from '../Home';
import Tickets from '../Tickets';
import Speakers from '../Speakers';
import Team from '../Team';
import FAQ from '../FAQ';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/tickets' component={Tickets}/>
        <Route exact path='/speakers' component={Speakers}/>
        <Route exact path='/team' component={Team}/>
        <Route exact path='/faq' component={FAQ}/>
    </Switch>
);

export default Routes;
