import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import AthleteLayout from './../layouts/layout.jsx';
import PostListContainer from './../containers/postListContainer.jsx';
import PostPageContainer from './../containers/postPageContainer.jsx';
import CoachesContainer from './../containers/CoachesContainer.jsx';
import LoginSignUpContainer from './../containers/LoginSignUpContainer.jsx'
import CoachContainer from './../containers/CoachContainer.jsx';
import UserProfileContainer from './../containers/UserProfileContainer.jsx';
import App from '../layouts/App.jsx';

const publicRoutes = FlowRouter.group({name: 'public'});

publicRoutes.route('/login', {
   name: 'login',
   action(){
       mount(App,{
           content: ()=> (null)
       })
   }
});
publicRoutes.route('/', {
    name: "general",
    action(){
        mount(App, {
            content:() => (<UserProfileContainer />)
        })
    }
});

