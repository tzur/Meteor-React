import React from 'react';
import {Row, Col} from 'react-bootstrap';
let Question = React.createClass({
   PropTypes: {
       body: React.PropTypes.string.isRequired
   },
   render(){
       return(
           <Row>
               <Col md={12}>
                    <p>{this.props.body}</p>
               </Col>
           </Row>

       )
   }
});
export default Question;