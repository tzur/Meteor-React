import React from 'react';
import ReactDOM from 'react-dom';
import CoachAthletesContainer from './../containers/CoachAthletesContainer.jsx';
import {mount} from 'react-mounter';
import AthletesContainer from './../containers/AthletesContainer.jsx'
import UserProfileContainer from '../containers/UserProfileContainer.jsx';
import AppContainer from '../containers/AppContainer.jsx';
const coachRoutes = FlowRouter.group({name: 'coach'});
const athleteRoutes = FlowRouter.group({name: 'athlete'});
coachRoutes.route('/coaches/:id/add-athletes', {
    name: 'addAthlete',
    action(){
        mount(AppContainer, {
            content: () => (<AthletesContainer />)
        })
    }
});
coachRoutes.route('/coaches/:id/create-event', {
    name: 'createEvent',
    action(){
        mount(AppContainer, {
            content: () => (<CoachAthletesContainer coach={Meteor.user()} />)
        })
    }
});
coachRoutes.route("/coaches/:id", {
    name: "coachProfile",
    action(params){
        mount(AppContainer, {
            content:() => (<UserProfileContainer userId={params.id}/>)
        })
    }
});

athleteRoutes.route('/athletes/:id', {
    name: "athleteProfile",
    action(params){
        mount(AppContainer, {
            content: ()=> (<UserProfileContainer userId={params.id}/>)
        })
    }
});