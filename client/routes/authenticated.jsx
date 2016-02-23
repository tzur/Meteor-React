import React from 'react';
import ReactDOM from 'react-dom';
import CoachAthletesContainer from './../containers/CoachAthletesContainer.jsx';
import {mount} from 'react-mounter';
import AthletesContainer from './../containers/AthletesContainer.jsx'
import App from '../layouts/App.jsx';
import UserProfileContainer from '../containers/UserProfileContainer.jsx';

const authenticatedRoutes = FlowRouter.group({name: 'authenticated'});

authenticatedRoutes.route('/admin/addAthlete', {
    name: 'addAthlete',
    action(){
        mount(App, {
            content: () => (<AthletesContainer />)
        })
    }
});
authenticatedRoutes.route('/admin', {
    name: 'admin',
    action(){
        mount(App, {
            content: () => (<CoachAthletesContainer coach={Meteor.user()} />)
        })
    }
});
authenticatedRoutes.route('/athletes/:id', {
   name: "athleteProfile",
   action(params){
       mount(App, {
           content: ()=> (<UserProfileContainer userId={params.id}/>)
       })
   }
});

//FlowRouter.route("/athletes/:id", {
//    name: "athletes",
//    action(params){
//        mount(AthleteLayout, {
//            content:() => (<UserProfileContainer userId={params.id}/>)
//        })
//    }
//});

//FlowRouter.route('/admin/addAthlete', {
//    name: 'addAthlete',
//    action(){
//        mount(AthleteLayout, {
//            content: () => (<AthletesContainer/>)
//        })
//    }
//});
//FlowRouter.route('/admin', {
//    name: 'admin',
//    action() {
//        mount(AthleteLayout,{
//            content:() => (<Admin />)
//        });
//    }
//});