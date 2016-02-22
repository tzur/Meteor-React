import React from 'react';
import {Input} from 'react-bootstrap';
let QuestionForm = React.createClass({
   getInitialState(){
     return {
         body: null
     }
   },
   handleBody(e){
       this.setState({body: e.target.value})
   },
   handleSubmit(e){
       e.preventDefault();
       this.props.addQuestion({body: this.state.body});
       this.setState({body: ""});
   },
   render(){
       return(
           <div>
               <Input label="Enter your question" type="text" value={this.state.body} onChange={this.handleBody}/>
               <button className="btn btn-default" onClick={this.handleSubmit}>Add Question</button>
           </div>
       )
   }
});
export default QuestionForm;