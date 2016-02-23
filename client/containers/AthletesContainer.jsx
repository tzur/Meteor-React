import React from 'react';
import Constants from '../constants';
import AddAthleteToCoach from '../components/AddAthleteToCoach.jsx'

let AthletesContainer = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
       let handler = Meteor.subscribe('allAthletes');
        return{
            ready: handler.ready(),
            athletes: Meteor.users.find({"profile.userType": Constants.ATHLETE}).fetch()
        }
    },
    render(){
        return(
            <div>
                {this.data.ready? <AddAthleteToCoach athletes={this.data.athletes} /> : null}
            </div>
        )
    }
});
export default AthletesContainer;