import React from 'react';
import {Input} from 'react-bootstrap'
import {ButtonInput} from 'react-bootstrap'


let CoachForm = React.createClass({
   getInitialState(){
     return{
         coachName: "",
         coachJob: "personalCoach"
     }
   },
   handleName(e){
       this.setState({coachName: e.target.value})
   },
   handleForm(e){
     e.preventDefault();


     this.props.handleForm({
         coachName: this.state.coachName,
         coachJob: this.state.coachJob
     });
     this.setState({coachName: ""});
   },
   handleJob(e){
       this.setState({coachJob: e.target.value});
   },
   render(){
       return(
           <form onSubmit={this.handleForm} className="row">
               <div className="row">
                   <div className="col-sm-4">
                       <Input type="text" label="Coach Name" value={this.state.coachName} placeholder="coach name"
                                                                                    onChange={this.handleName} required/>
                   </div>
               </div>
               <div className="row">
                   <div className="col-sm-4">
                       <Input type="select" label="Coach Job" onChange={this.handleJob}>
                           <option value="personalCoach">Personal Coach </option>
                           <option value="olympicCoach">Olympic Coach </option>
                           <option value="shapeCoach">Shape Coach </option>
                           <option value="shrink">Shrink </option>
                       </Input>
                   </div>
               </div>
               <div className="row">
                   <div className="col-sm-3">
                       <ButtonInput type="submit" />
                   </div>
               </div>

           </form>
       )
   }

});
export default CoachForm;