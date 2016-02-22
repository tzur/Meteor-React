import React from 'react';
import {Grid, Row, Image, Col} from 'react-bootstrap';
let ProfileHeader = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },

    render(){
        return(
            <Grid className="profileHeader">
                <div className="im-centered">
                    <Row>
                        <Col xs={4} md={4}>
                            <Image src="/images/coach.gif" rounded/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} md={4} className="profileTitle">
                            <h4>{this.props.username}</h4>
                        </Col>
                    </Row>
                </div>
            </Grid>
        )
    }
});

export default ProfileHeader;