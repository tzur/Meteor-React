import React from 'react';
import ReactDOM from 'react-dom';
import CoachAthletesContainer from './../containers/CoachAthletesContainer.jsx';
import {mount} from 'react-mounter';
import AthletesContainer from './../containers/AthletesContainer.jsx'
import App from '../layouts/App.jsx';
import UserProfileContainer from '../containers/UserProfileContainer.jsx';

const coachRoutes = FlowRouter.group({name: 'coach'});
const athleteRoutes = FlowRouter.group({name: 'athlete'});
coachRoutes.route('/coaches/:id/add-athletes', {
    name: 'addAthlete',
    action(){
        mount(App, {
            content: () => (<AthletesContainer />)
        })
    }
});
coachRoutes.route('/coaches/:id/create-event', {
    name: 'createEvent',
    action(){
        mount(App, {
            content: () => (<CoachAthletesContainer coach={Meteor.user()} />)
        })
    }
});
coachRoutes.route("/coaches/:id", {
    name: "coachProfile",
    action(params){
        mount(App, {
            content:() => (<UserProfileContainer userId={params.id}/>)
        })
    }
});

athleteRoutes.route('/athletes/:id', {
    name: "athleteProfile",
    action(params){
        mount(App, {
            content: ()=> (<UserProfileContainer userId={params.id}/>)
        })
    }
});