import React from 'react';
import CoachIcon from '../components/CoachesBar.jsx';
import CoachForm from '../components/CoachForm.jsx';
let CoachesContainer = React.createClass({
    getInitialState(){
      return {
          newCoach: false
      }
    },
    addCoach(){
        this.setState({newCoach: true});
        console.log("im here123213");
    },
    handleNewCoach(data){
        Meteor.call('addCoach', data, (error,result) => {
            if (error){
                console.log(error);
            } else{
                this.setState({newCoach: false});
                console.log(result)
            }
        })
    },
    coachDisplayJob(jobName){
        if (jobName ==="personalCoach"){
            return "Personal Coach";
        }else if (jobName === "olympicCoach" ){
            return "Olympic Coach";
        }else if (jobName === 'shapeCoach' ){
          return 'Shape Coach';
        }else if (jobName === 'shrink'){
            return 'Shrink'
        }
    },
    handleBtn(){
        if (this.state.newCoach){
            this.setState({newCoach: false});
        }else{
            this.setState({newCoach: true});
        }
    },
    render(){
        return(
            <div>
                <div className="row row-centered">
                    <div className="col-sm-12 col-centered">
                        <h3><a href="#">Your personal Staff</a></h3>
                    </div>
                </div>
                <div className="row row-centered">
                    {this.props.user.profile? this.props.user.profile.userCoaches.map((coach) => {
                        return <CoachIcon key={Math.random()} name={coach.coachName} job={coach.coachJob} displayJobName={this.coachDisplayJob}/>
                    }):  null}
                </div>
                <div className="row row-centered">
                    <div className="col col-centered col-sm-4">
                        {this.state.newCoach? <button className="addCoach btn btn-primary" onClick={this.handleBtn}>Close Form</button> :
                                                    <button className="addCoach btn btn-primary" onClick={this.handleBtn}>Add Coach</button>}
                    </div>
                </div>

                {this.state.newCoach? <CoachForm handleForm={this.handleNewCoach}  /> : null}
            </div>
        )
    }

});
export default CoachesContainer;