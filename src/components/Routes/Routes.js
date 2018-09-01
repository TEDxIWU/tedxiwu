import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Tickets from "../Tickets";
import Speakers from "../Speakers";
import Team from "../Team";
import FAQs from "../FAQs";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Tickets" component={Tickets} />
    <Route exact path="/Speakers" component={Speakers} />
    <Route exact path="/Team" component={Team} />
    <Route exact path="/FAQs" component={FAQs} />
  </Switch>
);

export default Routes;
