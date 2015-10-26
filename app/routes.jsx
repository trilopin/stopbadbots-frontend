import Application from './containers/application.jsx'
import Home from './containers/home.jsx'
import User from './containers/user.jsx'
import Repo from './containers/repo.jsx'


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

