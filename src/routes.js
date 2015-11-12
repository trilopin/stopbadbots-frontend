import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    Application,
    LoggedApplication,
    Projects,
    Features,
    Data,
    Events,
    Predictions,
    Settings,
    NotFound,
    Login,
    Logout
    } from './containers'


export default (store) => {
  const requireLogin = (nextState, replaceState, cb) => {
    const { auth: { token }} = store.getState();
    if (!token) {
        replaceState(null, '/login');
    }
    cb();
  };

  return (
    <Route>
        <Route component={Application} onEnter={requireLogin}>
            <Route path="/projects" component={Projects} />
            <Route path=":user/:project/data" component={Data}/>
            <Route path=":user/:project/features" component={Features}/>
            <Route path=":user/:project/events" component={Events}/>
            <Route path=":user/:project/predictions" component={Predictions}/>
            <Route path=":user/:project/settings" component={Settings}/>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="*" component={NotFound} status={404}/>
    </Route>
  );
};
