import React from 'react';
import CreateEventForm from '../components/events/admin/CreateEventForm.jsx';
let CoachAthletesContainer = React.createClass({
   PropTypes: {
        coach: React.PropTypes.object.isRequired
   },
   mixins: [ReactMeteorData],
   getMeteorData(){
      let handler = Meteor.subscribe('coachAthletes', this.props.coach);
       return {
           ready: handler.ready(),
           coachAthletes: Meteor.users.find({_id: {$in: this.props.coach.profile.athletes}}).fetch()
       }
   },
   render(){
       return(
           <div>
               {this.data.ready? <CreateEventForm coachAthletes={this.data.coachAthletes} /> : null }
           </div>
       )
   }
});
export default CoachAthletesContainer;