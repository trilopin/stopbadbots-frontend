import {
    Application,
    Home,
    User,
    Repo,
    NotFound
    } from './containers'



export const routes = [{
    component: Application,
    childRoutes: [
        { path: '/', component: Home },
        { path: 'user/:user', component: User },
        { path: 'user/:user/repo/:repo', component: Repo },
        { path: "*", component: NotFound }
    ]
}];

