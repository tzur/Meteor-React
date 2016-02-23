import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import AthleteLayout from './../layouts/layout.jsx';
import PostListContainer from './../containers/postListContainer.jsx';
import PostPageContainer from './../containers/postPageContainer.jsx';
import CoachesContainer from './../containers/CoachesContainer.jsx';
import Login from './../components/login.jsx'
import CoachContainer from './../containers/CoachContainer.jsx';
import UserProfileContainer from './../containers/UserProfileContainer.jsx';
import App from '../layouts/App.jsx';

const publicRoutes = FlowRouter.group({name: 'public'});

publicRoutes.route('/login', {
   name: 'login',
   action(){
       mount(App,{
           content: ()=> (<Login />)
       })
   }
});


//FlowRouter.route("/", {
//    name: "home",
//    action() {
//        mount(AthleteLayout,{
//             content:() => (<UserProfileContainer />)});
//    }
//});
//FlowRouter.route("/coaches/:id",{
//    name: "coaches",
//    action(params){
//        mount(AthleteLayout, {
//            content:() => (<UserProfileContainer userId={params.id}/>)
//        })
//    }
//});


//
//FlowRouter.route('/user/coaches', {
//    name: 'coaches',
//    action(params) {
//        mount(AthleteLayout, {
//            content: () => (<CoachesContainer />)
//        })
//    }
//});
//FlowRouter.route('/user/coaches/:coachId', {
//    name: 'coach',
//    action(params){
//        mount(AthleteLayout, {
//            content: () => (<CoachContainer />)
//        })
//    }
//});


