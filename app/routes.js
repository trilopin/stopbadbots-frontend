import Application from './containers/Application'
import Home from './containers/Home'
import User from './containers/User'
import Repo from './containers/Repo'


export const routes = [{
    component: Application,
    childRoutes: [
        {
            path: '/',
            component: Home
        },
        {
            path: 'user/:user',
            component: User
        },
        {
            path: 'user/:user/repo/:repo',
            component: Repo
        }
     /*   {
            path: "*",
            component: require('./components/NoMatch')
        }*/
    ]
}];

