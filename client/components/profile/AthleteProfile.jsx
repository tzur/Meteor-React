import React from 'react';
import ProfileHeader from './profileHeader.jsx';
import {Input, Row, Col,Grid} from 'react-bootstrap';
import Event from '../events/Event.jsx'
let AthleteProfile = React.createClass({
    getInitialState(){
        return{
            judoTraining: false,
            competition: false,
            fitness: false
        }
    },
    handleJudo(e){
        this.setState({judoTraining: e.target.checked});
    },
    handleFitness(e){
        this.setState({fitness: e.target.checked});

    },
    handleCompetition(e){
        this.setState({competition: e.target.checked});
    },
    componentWillMount(){
        if (window.location.href.indexOf('/athletes') === -1|| window.location.href.indexOf('/coaches') > -1){
            history.pushState(null, null, "/athletes/"+ Meteor.userId() );
        }

    },
    render(){
        let widgetEventData = [];
        if (this.state.judoTraining && this.props.user.profile.events && this.props.user.profile.events.judo){
            this.props.user.profile.events.judo.forEach((event)=>{
                widgetEventData.push(event)
            })
        }
        if (this.state.competition && this.props.user.profile.events && this.props.user.profile.events.competition){
            this.props.user.profile.events.competition.forEach((event)=>{
                widgetEventData.push(event)
            })
        }
        if (this.state.fitness && this.props.user.profile.events && this.props.user.profile.events.fitness){
            this.props.user.profile.events.fitness.forEach((event)=>{
                widgetEventData.push(event)
            })
        }
        return(
            <div>
                <ProfileHeader username={this.props.user.username} />
                <Grid className="profileBody">
                    <Row>
                        <Col md={4} xs={4}>
                            <Input type="checkbox" label="Judo Trainings" onClick={this.handleJudo} />
                        </Col>
                        <Col md={4} xs={4}>
                            <Input type="checkbox" label="Competitions" onClick={this.handleCompetition}/>
                        </Col>
                        <Col md={4} xs={4}>
                            <Input type="checkbox" label="Fitness" onClick={this.handleFitness} />
                        </Col>
                    </Row>
                </Grid>
                {widgetEventData.map(function(event){
                    return( <Event event={event} key={Math.random()} />)
                })}
            </div>
        )
    }
});
export default AthleteProfile;