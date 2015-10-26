import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import Application from './components/application.jsx'
import Home from './components/pages/home.jsx'
import PageOne from './components/pages/pageone.jsx'
import PageTwo from './components/pages/pagetwo.jsx'

export const Routes = (
    <ReduxRouter>
      <Route component={Application}>
        <Route path="/" component={Home} />
        <Route path="page1" component={PageOne}/>
        <Route path="page2" component={PageTwo}/>
      </Route>
    </ReduxRouter>
);
