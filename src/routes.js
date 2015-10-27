import React from 'react';
import {IndexRoute, Route} from 'react-router';
/*import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';*/
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
    Login
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
        <Route path="/" component={Application}>
            <Route path=":user/" component={Projects} /> /*temporary without requireLogin*/
            <Route onEnter={requireLogin}>
                <Route path=":user/:project/data" component={Data}/>
                <Route path=":user/:project/features" component={Features}/>
                <Route path=":user/:project/events" component={Events}/>
                <Route path=":user/:project/predictions" component={Predictions}/>
                <Route path=":user/:project/settings" component={Settings}/>
            </Route>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} status={404}/>
    </Route>
  );
};
