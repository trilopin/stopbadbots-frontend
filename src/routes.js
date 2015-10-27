import {
    Application,
    Projects,
    Features,
    Data,
    Events,
    Predictions,
    Settings,
    NotFound
    } from './containers'



export const routes = [{
    component: Application,
    childRoutes: [
        { path: '/', component: Projects },
        { path: ':user/:project/data', component: Data },
        { path: ':user/:project/features', component: Features },
        { path: ':user/:project/events', component: Events },
        { path: ':user/:project/predictions', component: Predictions },
        { path: ':user/:project/settings', component: Settings },
        { path: "*", component: NotFound }
    ]
}];

