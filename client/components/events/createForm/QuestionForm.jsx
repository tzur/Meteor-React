import React from 'react';
import {Input,Row, Col} from 'react-bootstrap';
let QuestionForm = React.createClass({
   PropTypes: {
      addQuestion: React.PropTypes.func.isRequired
   },
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
       console.log("sdf");
       if (this.state.body != "" && this.state.body != null){
           this.props.addQuestion({body: this.state.body});
           this.setState({body: ""});
       }
   },
   render(){
       return(
           <div>

               <Row>
                   <Col md={10} xs={10} className="questionBody">
                       <Input  label="Enter your question" type="text" value={this.state.body} onChange={this.handleBody}/>
                   </Col>
                   <Col md={1} xs={1} className="addQuestionBtn">
                       <button className="btn btn-success" onClick={this.handleSubmit}>+</button>
                   </Col>
               </Row>


           </div>
       )
   }
});
export default QuestionForm;