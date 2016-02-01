import React from 'react';
import CoachIcon from '../components/CoachesBar.jsx';
import CoachForm from '../components/CoachForm.jsx';
let CoachesContainer = React.createClass({
    getInitialState(){
      return {
          currentCoachJob: false
      }
    },
    changeCoach(coachJob){
        this.setState({currentCoachJob: coachJob})
        console.log("im here123213");
    },
    handleNewCoach(data){
        Meteor.call('addCoach', data, (error,result) => {
            if (error){
                console.log(error);
            } else{
                console.log(result)
            }
        })
    },
    render(){

        return(
            <div>
                <div className="row row-centered">
                    <div className="col-md-12 col-centered">
                        <h3><a href="#">Your personal Staff</a></h3>
                    </div>
                    {this.props.user.profile? this.props.user.profile.userCoaches.map((coach) => {
                        return <CoachIcon key={Math.random()} name={coach.coachName} job={coach.coachJob} changeCoach={this.changeCoach} />
                    }):  <CoachIcon key={Math.random()} name="placeholder" job="place2" />}

                </div>

                {this.state.currentCoachJob? <CoachForm handleForm={this.handleNewCoach} coachJob={this.state.currentCoachJob} /> : null}
            </div>
        )
    }

});
export default CoachesContainer;