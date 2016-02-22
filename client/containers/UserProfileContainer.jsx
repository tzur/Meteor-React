import React from 'react';
import UserProfile from '../components/UserProfile.jsx'


let UserProfileContainer = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let handle =  Meteor.subscribe('userById', this.props.userId);
        console.log("here");
        return{
            loading: !handle.ready(),
            currentUser: Meteor.users.findOne({_id: this.props.userId})
        }
    },
    render(){
        return(
            <div>
                {this.data.currentUser.profile? <UserProfile user={this.data.currentUser} /> : null}
            </div>
        )
    }
});
export default UserProfileContainer;