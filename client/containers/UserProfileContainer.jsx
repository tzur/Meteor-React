import React from 'react';
import UserProfile from '../components/profile/UserProfile.jsx'

let UserProfileContainer = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let handle;
        if (Meteor.userId() != this.props.userId && this.props.userId){
            handle = Meteor.subscribe('userById', this.props.userId);
            console.log("here33");
            return{
                ready: handle.ready(),
                currentUser: Meteor.users.findOne({_id: this.props.userId})
            }
        }else{
            console.log("here1");
            if (Meteor.user().profile){
                return {
                    ready: true,
                    currentUser: Meteor.user()
                }
            }else{
                return {
                    ready: false
                }
            }
        }

    },
    render(){
        return(
            <div>
                {this.data.ready? <UserProfile user={this.data.currentUser} /> : null}
            </div>
        )
    }
});
export default UserProfileContainer;