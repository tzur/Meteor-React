import React from 'react';
import {Input} from 'react-bootstrap'
import {ButtonInput} from 'react-bootstrap'


let CoachForm = React.createClass({
   getInitialState(){
     return{
         coachName: ""
     }
   },
   handleName(e){
       this.setState({coachName: e.target.value})
   },
   handleForm(e){
     e.preventDefault();
     let coachJob;
     if (this.props.coachJob ==="Personal Coach"){
       coachJob = 'personalCoach'
     }else if (this.props.coachJob === "Olympic Coach"){
       coachJob = 'olympicCoach'
     }else if (this.props.coachJob === 'Shape Coach'){
       coachJob = 'shapeCoach'
     }else if (this.props.coachJob === 'shrink'){
       coachJob = 'shrink'
     }

     this.props.handleForm({
         coachName: this.state.coachName,
         coachJob: coachJob
     });
     this.setState({coachName: "", coachJob: ""});
   },
   render(){
       return(
           <form onSubmit={this.handleForm}>
               <Input type="text" label="Coach Name" value={this.state.coachName} placeholder="coach name" onChange={this.handleName} required/>
               <Input type="text" label="Coach Job" value={this.props.coachJob} disabled />

               <ButtonInput type="submit" />
           </form>
       )
   }

});
export default CoachForm;