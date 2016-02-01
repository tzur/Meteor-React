import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import AthleteLayout from './layouts/layout.jsx';
import PostListContainer from './containers/postListContainer.jsx';
import PostPageContainer from './containers/postPageContainer.jsx';
import CoachesContainer from './containers/CoachesContainer.jsx';
import Login from './components/login.jsx'


FlowRouter.route("/", {
    name: "home",
    action() {
        mount(AthleteLayout,{
             content:() => (<PostListContainer />)});
    }
});


FlowRouter.route('/post/:_id', {
    name: 'post',
    action(params) {
        mount(AthleteLayout, {
            content: () => (<PostPageContainer postId={params._id} />)
        });

    }
});
FlowRouter.route('/coaches', {
    name: 'coaches',
    action(params) {
        mount(AthleteLayout, {
            content: () => (<CoachesContainer />)
        })
    }
});


