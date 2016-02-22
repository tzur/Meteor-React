import React from 'react';
import {Grid, Row, Col, Input, ButtonInput} from 'react-bootstrap'
import TrainingEventForm from '../events/createForm/TrainingEventForm.jsx'
import CompetitionEventForm from '../events/createForm/CompetitionEventForm.jsx';
import RoutineEventForm from '../events/createForm/RoutineEventForm.jsx';
import PhysicalStateEventForm from '../events/createForm/PhysicalStateEventForm.jsx';
import createEvent from '../../../both/modules/createEvent';

let Admin = React.createClass({
    getInitialState(){
        return {
            training: false,
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
    render(){
        return(
           <Grid>
               <Row>
                   <Col md={3}>
                       <button className="btn btn-primary"  onClick={this.handleTraining}>Training</button>
                   </Col>
                   <Col md={3}>
                       <button className="btn btn-primary" onClick={this.handleCompetition}>Competition</button>
                   </Col>
                   <Col md={3}>
                       <button className="btn btn-primary" onClick={this.handleRoutine}>Routine</button>
                   </Col>
                   <Col md={3}>
                       <button className="btn btn-primary" onClick={this.handlePhysicalState}>Physical State</button>
                   </Col>
               </Row>
               <div className="eventForm">
                   {this.state.training? <TrainingEventForm handleSubmit={this.handleSubmit}/> : null}
                   {this.state.competition? <CompetitionEventForm handleSubmit={this.handleSubmit}/> : null}
                   {this.state.routine? <RoutineEventForm handleSubmit={this.handleSubmit} /> : null}
                   {this.state.physicalState? <PhysicalStateEventForm handleSubmit={this.handleSubmit} /> : null }
               </div>
           </Grid>
        )
    }







});

export default Admin;
