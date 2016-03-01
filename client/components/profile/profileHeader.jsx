import React from 'react';
import {Grid, Row, Image, Col} from 'react-bootstrap';
let ProfileHeader = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },

    render(){
        return(
            <Grid className="profileHeader">
                    <Row>
                        <Col xs={4} md={4}>
                        </Col>
                        <Image src="/images/coach.gif" rounded/>
                        <span className="profileTitle"><h4 className="inline">{this.props.username}</h4></span>
                    </Row>
            </Grid>
        )
    }
});

export default ProfileHeader;