import React from 'react';
import CreateEventMain from '../components/events/admin/CreateEventForm.jsx';

let CreateEventContainer = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
      Meteor.subscribe('coachAthletes');
        if (Meteor.user().profile.athletes){
            return{
                coachAthletes: Meteor.users.find({_id: {$in: Meteor.user().profile.athletes}})
            }
        }else{
            return{
                coachAthletes: undefined
            }
        }
    },
    render(){
        return(
            <div>
                {this.data.coachAthletes? <CreateEventMain coachAthletes={this.data.coachAthletes} /> : null}
            </div>
        )
    }
});
export default CreateEventContainer;
//
//mixins: [ReactMeteorData],
//    getMeteorData(){
//    let handle =  Meteor.subscribe('posts');
//    return{
//        loading: !handle.ready(),
//        posts: Posts.find({}).fetch()
//    }
//},