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
            events: [],
            selectedWidgets: []
        }
    },
    clearState(){
      this.setState({
          training: false,
          competition: false,
          fitness: false,
          events: [],
          selectedWidgets: []

      })
    },
    handleTraining(e){
        let newState;
        if (this.state.training){
            newState = false;
        }else{
            newState = true;
        }
        this.clearState();
        this.setState({training: newState});
    },
        handleFitness(e){
            let newState;
            if (this.state.fitness){
                newState = false;
            }else{
                newState = true;
            }
            this.clearState();
            this.setState({fitness: newState});

    },
    handleCompetition(e){
        let newState;
        if (this.state.competition){
            newState = false;
        }else{
            newState = true;
        }
        this.clearState();
        this.setState({competition: newState});
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
                    name: "Judo",
                    value: Constants.TRAININGS.JUDO
                },
                {
                    name: "Weight Lift",
                    value: Constants.TRAININGS.WEIGHT_LIFT
                },
                {
                    name: "Running",
                    value: Constants.TRAININGS.RUNNING
                }
            ]
        }else if (this.state.fitness){
            return [
                {
                    name: "Yoga",
                    value: Constants.JUDO
                },
                {
                    name: "Psychiatrist",
                    value: Constants.FITNESS
                },
                {
                    name: "Massage",
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
        let currentWidgets = this.state.selectedWidgets;
        let widgetIndex = 0;
        let found;

        while (widgetIndex < currentWidgets.length){
            if (currentWidgets[widgetIndex] === widget){
                found = true;
                break;
            }
            widgetIndex++;
        }
        if (found){
            currentWidgets.splice(widgetIndex, 1);
        }else{
            currentWidgets.push(widget);
        }
        this.setState({selectedWidgets: currentWidgets});

        if (this.props.user.profile.event[this.getCategory()]){
            this.props.user.profile.event[this.getCategory()].forEach(event=>{
                if (currentWidgets.indexOf(event.type)> -1){
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
                <Grid className="profileBody" fluid>
                    <Row className="show-grid">
                        <Col md={4} xs={4} className="firstCategory" style={{cursor: 'pointer'}} onClick={this.handleTraining}>
                            <p className="categoryText"> Judo Trainings</p>
                        </Col>
                        <Col md={4} xs={4} className="secondCategory" style={{cursor: 'pointer'}} onClick={this.handleCompetition}>
                            <p className="categoryText"> Competitions</p>
                        </Col>
                        <Col md={4} xs={4} className="thirdCategory" style={{cursor: 'pointer'}} onClick={this.handleFitness}>
                            <p className="categoryText"> Fitness</p>
                        </Col>
                    </Row>
                </Grid>
                <div className="profileWidgets">
                    <EventWidget widgets={this.getWidgets()} widgetSelected={this.handleWidgetSelect} selectedWidgets={this.state.selectedWidgets}/>
                    {this.state.events.map(event=>{
                        event.title="dfg";
                        return(
                            <Event key={Math.random()} event={event} />
                        )
                    })}
                </div>
            </div>
        )
    }
});
export default AthleteProfile;

//TODO add event ID
//TODO add event title
//TODO add Question ID.
//TODO add schemas.
//TODO add competition and fitness form
//TODO Add answers functionality.
//TODO move EventWidget to iterate on each widget at first place?
//TODO test everything.
