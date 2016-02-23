import React from 'react';
import {Panel, Grid, Row, Col, Accordion} from 'react-bootstrap';
import Question from '../questions/question.jsx';
let Event = React.createClass({
   propTypes: {
     event: React.PropTypes.object.isRequired
   },
   render(){
       return(
           <Grid fluid={true}>
               <Row className>
                   <Col md={6} xs={6}>
                       <Panel bsStyle="primary" collapsible defaultExpanded header={this.props.event.title}>
                           <Accordion>
                               {this.props.event.questions? this.props.event.questions.map(question=>{
                                   return (<Question question={question} />)
                               }): null}
                           </Accordion>
                           { this.props.event.date}
                       </Panel>
                   </Col>
               </Row>
           </Grid>

       )
   }
});
export default Event;