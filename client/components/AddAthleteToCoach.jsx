import React from 'react';
import {Input, Row, Col, Grid} from 'react-bootstrap';
import {insertAthletesToCoach} from '../modules/modules';
import Constants from '../constants';
let AddAthleteToCoach = React.createClass({
   PropTypes: {
       athletes: React.PropTypes.array.isRequired
   },
   getInitialState(){
        return{
            coachAthletes: []
        }
   },
   handleClick(e){
     let currentState = this.state.coachAthletes;
     let athleteIndex = 0;
     if (e.target.checked){
         currentState.push(e.target.value);
         this.setState({coachAthletes: currentState});
     }else{
         for (athleteIndex; athleteIndex< currentState.length; athleteIndex++){
             if (currentState[athleteIndex] === e.target.value){
                 break;
             }
         }
         //Safety check
         if (athleteIndex < currentState.length && currentState[athleteIndex] === e.target.value){
             currentState.splice(athleteIndex,1);
             this.setState({coachAthletes: currentState});
         }else{
             console.error("Some weird shit just happened");
         }
     }

   },
   handleSubmit(){
     insertAthletesToCoach(this.state.coachAthletes, (err, result)=>{
         if (err){
             console.error(err);
         }else{
             console.log(result);
         }
     })
   },
   componentWillMount(){
       if (Meteor.user().profile.userType === Constants.ATHLETE){
           FlowRouter.go('/athletes/'+ Meteor.userId());
       }
   },
   render(){
       return(
           <Grid>
               <Row>
                   <Col md={12} xs={12} className="text-center">
                       <h3>Choose Your Athletes</h3>
                   </Col>
               </Row>
               <Row>
                   <Col md={6} xs={6} mdPush={3} xsPush={3}>
                       <Row>
                           <Col md={10} mdPush={1} xs={10} xsPush={1}>
                               {this.props.athletes.map(athlete=>{
                                   return(
                                       <div key={athlete._id}>
                                           <Input type="checkbox" onClick={this.handleClick}  value={athlete._id}/>
                                           {athlete.username}
                                       </div>
                                   )
                               })}
                           </Col>
                       </Row>
                       <button  type="button" className="btn btn-primary addAthleteBtn" onClick={this.handleSubmit}>Insert Athletes</button>
                   </Col>
               </Row>

           </Grid>
       )
   }
});
export default AddAthleteToCoach;