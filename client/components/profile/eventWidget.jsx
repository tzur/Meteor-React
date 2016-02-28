import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

let EventWidget = React.createClass({
   PropTypes: {
       widgets: React.PropTypes.array.isRequired,
       widgetSelected: React.PropTypes.func.isRequired
   },
   handleClick(e){
       this.props.widgetSelected(e.target.value);
   },
   render(){
       return(
           <Grid>
               <Row>
                   <Col md={1} xs={1}>
                   </Col>
               {this.props.widgets.map(widget=>{
                   return(
                       <Col md={3} xs={3} className="zeroPadding" key={widget.value}>
                             <button  className="btn btn-primary full-width" value={widget.value} onClick={this.handleClick}>{widget.name}</button>
                       </Col>
                   )
                })}
                   <Col md={1} xs={1}>
                   </Col>
               </Row>
           </Grid>
       )
   }

});
export default EventWidget;