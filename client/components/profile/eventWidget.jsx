import React from 'react';
import {Grid, Row, Col, Input} from 'react-bootstrap';

let EventWidget = React.createClass({
   PropTypes: {
       widgets: React.PropTypes.array.isRequired,
       widgetSelected: React.PropTypes.func.isRequired,
       selectedWidgets: React.PropTypes.array.isRequired
   },
   handleClick(e){
       this.props.widgetSelected(e.currentTarget.attributes['value']['value']);
   },
   render(){
       let backgroundColors = [];
       this.props.widgets.forEach(widget=>{
           if (this.props.selectedWidgets.indexOf(widget.value) > -1 ){
               backgroundColors[widget.value] = {
                   'backgroundColor': '#FF786E',
                   'cursor': 'pointer'
               };
           }else{
               backgroundColors[widget.value] = {
                   'backgroundColor': '#E5E9E3',
                   'cursor': 'pointer'
               }
           }
       });
       return(
           <Grid>
               <Row>
                   <Col md={1} xs={1}>
                   </Col>
               {this.props.widgets.map(widget=>{
                   return(
                       <Col href='' md={3} xs={3} style={backgroundColors[widget.value]} className="widgetWrapper"
                                                    key={widget.value} value={widget.value} onClick={this.handleClick}>
                              <p className="widgetName">{widget.name}</p>
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