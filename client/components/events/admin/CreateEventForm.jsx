import React from 'react';
import {Grid, Row, Col, Input, ButtonGroup, Button} from 'react-bootstrap'
import Constants from '../../../constants';
import CompetitionEventForm from '../createForm/CompetitionEventForm.jsx';
import RoutineEventForm from '../createForm/RoutineEventForm.jsx';
import PhysicalStateEventForm from '../createForm/PhysicalStateEventForm.jsx';
import TrainingEventForm from '../createForm/TrainingEventForm.jsx';
import createEvent from '../../../../both/modules/createEvent';

let CreateEventForm = React.createClass({
    PropTypes:{
      coachAthletes: React.PropTypes.array.isRequired
    },
    getInitialState(){
        return {
            training: true,
            competition: false,
            routine: false,
            physicalState: false
        }
    },
    turnOfState(){
        this.setState({
            training:false,
            competition: false,
            routine: false,
            physicalState: false
        })
    },
    handleTraining(){
      this.turnOfState();
      this.setState({training: true});
    },
    handleCompetition(){
        this.turnOfState();
        this.setState({competition: true});
    },
    handleRoutine(){
        this.turnOfState();
        this.setState({routine: true});
    },
    handlePhysicalState(){
        this.turnOfState();
        this.setState({physicalState: true});
    },
    handleSubmit(options, category){
        createEvent(options, category, (err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result);
            }
        })
    },
    componentWillMount(){
      if (Meteor.user().profile.userType === Constants.ATHLETE){
          FlowRouter.go('/athletes/' + Meteor.userId());
      }
    },
    render(){
        return(
            <div>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="text-center">
                            <h3>Create Event </h3>
                        </div>
                    </Col>
                </Row>

                <ButtonGroup justified>
                    <Button className="im-justified trainingBtn" onClick={this.handleTraining}>Training</Button>
                    <Button className="im-justified routineBtn" onClick={this.handleRoutine}>Routine</Button>
                    <Button className="im-justified physicalBtn" onClick={this.handlePhysicalState}>Physical State</Button>
                    <Button className="im-justified competitionBtn" onClick={this.handleCompetition}>Competition</Button>
                </ButtonGroup>
                <div className="eventForm">
                    {this.state.training? <TrainingEventForm coachAthletes={this.props.coachAthletes} handleSubmit={this.handleSubmit}/> : null}
                    {this.state.competition? <CompetitionEventForm handleSubmit={this.handleSubmit}/> : null}
                    {this.state.routine? <RoutineEventForm handleSubmit={this.handleSubmit} /> : null}
                    {this.state.physicalState? <PhysicalStateEventForm handleSubmit={this.handleSubmit} /> : null }
                </div>
            </div>


        )
    }
});

export default CreateEventForm;
