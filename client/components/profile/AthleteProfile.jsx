import React from 'react';
import ProfileHeader from './profileHeader.jsx';
import {Input, Row, Col,Grid} from 'react-bootstrap';
import Event from '../events/Event.jsx'
import EventWidget from './EventWidget.jsx';
import Constants from '../../constants';
import {getSelectedEvents} from '../../modules/modules'
let AthleteProfile = React.createClass({
    PropTypes: {
      user: React.PropTypes.object.isRequired
    },
    getInitialState(){
        return{
            training: false,
            competition: false,
            fitness: false,
            events: []
        }
    },
    clearState(){
      this.setState({
          training: false,
          competition: false,
          fitness: false

      })
    },
    handleTraining(e){
        this.clearState();
        this.setState({training: e.target.checked});
    },
        handleFitness(e){
            this.clearState();
            this.setState({fitness: e.target.checked});

    },
    handleCompetition(e){
        this.clearState();
        this.setState({competition: e.target.checked});
    },
    componentWillMount(){
        if (window.location.href.indexOf('/athletes') === -1|| window.location.href.indexOf('/coaches') > -1){
            history.pushState(null, null, "/athletes/"+ Meteor.userId() );
        }
    },
    getWidgets(){
        if (this.state.training){
            return [
                {
                    name: "ג'ודו",
                    value: Constants.TRAININGS.JUDO
                },
                {
                    name: "כוח",
                    value: Constants.TRAININGS.WEIGHT_LIFT
                },
                {
                    name: "ריצה",
                    value: Constants.TRAININGS.RUNNING
                }
            ]
        }else if (this.state.fitness){
            return [
                {
                    name: "יוגה",
                    value: Constants.JUDO
                },
                {
                    name: "פיזיותרפיה",
                    value: Constants.FITNESS
                },
                {
                    name: "מסאג'",
                    value: Constants.ROUTINE
                }
            ]
        }else{
            return [];
        }
    },
    getCategory(){
      if (this.state.training){
          return Constants.TRAINING;
      }else if(this.state.competition){
          return Constants.COMPETITION;
      }else{
          return Constants.FITNESS;
      }
    },
    handleWidgetSelect(widget){
        let tempEvents = [];
        if (this.props.user.profile.event[this.getCategory()]){
            this.props.user.profile.event[this.getCategory()].forEach(event=>{
                if (event.type === widget){
                    tempEvents.push(event)
                }
            })
        }
        this.setState({events: tempEvents})
    },
    render(){
        return(
            <div>
                <ProfileHeader username={this.props.user.username} />
                <Grid className="profileBody">
                    <Row>
                        <Col md={4} xs={4}>
                            <Input type="checkbox" label="Judo Trainings" onClick={this.handleTraining} />
                        </Col>
                        <Col md={4} xs={4}>
                            <Input type="checkbox" label="Competitions" onClick={this.handleCompetition}/>
                        </Col>
                        <Col md={4} xs={4}>
                            <Input type="checkbox" label="Fitness" onClick={this.handleFitness} />
                        </Col>
                    </Row>
                </Grid>
                <EventWidget widgets={this.getWidgets()} widgetSelected={this.handleWidgetSelect}/>
                {this.state.events.map(event=>{
                    event.title="dfg";
                    return(
                        <Event key={Math.random()} event={event} />
                    )
                })}
            </div>
        )
    }
});
export default AthleteProfile;