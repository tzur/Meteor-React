import React from 'react';
import PostPage from '../components/post_page.jsx';
let PostPageContainer = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let handle =  Meteor.subscribe('singlePost', this.props.postId);
        return{
            loading: !handle.ready(),
            post: Posts.findOne(this.props.postId)
        }
    },
    render(){
        return(
            <PostPage post={this.data.post} />
        )
    }
});
export default PostPageContainer;