import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import AthleteLayout from './layouts/layout.jsx';
import PostListContainer from './containers/postListContainer.jsx';
import PostPageContainer from './containers/postPageContainer.jsx';
import CoachesContainer from './containers/CoachesContainer.jsx';
import Login from './components/login.jsx'
import CoachContainer from './containers/CoachContainer.jsx';
import UserProfileContainer from './containers/UserProfileContainer.jsx';
import Admin from './components/admin/admin.jsx';

FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        mount(AthleteLayout,{
            content:() => (<Admin bla="Dogs are crazy" />)
        });
    }
});
//FlowRouter.route("/", {
//    name: "home",
//    action() {
//        mount(AthleteLayout,{
//             content:() => (<UserProfileContainer />)});
//    }
//});
FlowRouter.route("/coaches/:id",{
    name: "coaches",
    action(params){
        mount(AthleteLayout, {
            content:() => (<UserProfileContainer userId={params.id}/>)
        })
    }
});
FlowRouter.route("/athletes/:id", {
    name: "athletes",
    action(params){
        mount(AthleteLayout, {
            content:() => (<UserProfileContainer userId={params.id}/>)
        })
    }
});


FlowRouter.route('/user/coaches', {
    name: 'coaches',
    action(params) {
        mount(AthleteLayout, {
            content: () => (<CoachesContainer />)
        })
    }
});
FlowRouter.route('/user/coaches/:coachId', {
    name: 'coach',
    action(params){
        mount(AthleteLayout, {
            content: () => (<CoachContainer />)
        })
    }
});


