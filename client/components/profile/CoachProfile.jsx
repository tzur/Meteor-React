import React from 'react';
import {Grid, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import CreateEventContainer from '../../containers/CreateEventContainer.jsx';
import AthletesContainer from '../../containers/AthletesContainer.jsx';

let CoachProfile = React.createClass({
    PropTypes: {
      user: React.PropTypes.object.isRequired
    },
    componentWillMount(){
        if (window.location.href.indexOf('/athletes') === -1|| window.location.href.indexOf('/coaches') > -1){
            history.pushState(null, null, "/coaches/"+ Meteor.userId() );
        }

    },
    getInitialState(){
        return {
            eventMode: true,
            athleteMode: false
        }
    },
    handleEventClick(){
      this.setState({athleteMode: false, eventMode: true})
    },
    handleAthleteClick(){
        this.setState({athleteMode: true, eventMode: false})
    },
    render(){
        return(
            <div>
                <h4 className="text-center">Welcome {this.props.user.username} to your Dashboard!</h4>
                    <Row>
                        <Col md={3} xs={2}>

                        </Col>
                        <Col md={6} xs={8}>
                                <Button  className="btn btn-primary half-width" onClick={this.handleEventClick}>Create Event</Button>
                                <Button className="btn btn-primary half-width" onClick={this.handleAthleteClick}>Add Athletes</Button>
                        </Col>
                        <Col md={3} xs={2}>
                        </Col>
                    </Row>
                    {this.state.eventMode? <CreateEventContainer /> : <AthletesContainer />}


            </div>

        )
    }
});
export default CoachProfile;