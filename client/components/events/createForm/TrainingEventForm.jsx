import React from 'react';
import {Grid, Row, Col, Input, } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import QuestionForm from '../createForm/QuestionForm.jsx';
import moment from "moment";
import Question from './Question.jsx';
import uuid from 'node-uuid';
let TrainingEventForm = React.createClass({
    getInitialState(){
      return {
          questionMode: false,
          questionKey: 0,
          event: {
              trainingType: null,
              location: null,
              questions: []
          },
          format: "YYYY-MM-DD h:mm a",
          inputFormat: "DD/MM/YYYY h:mm a",
          mode: "date",
          date:"1990-06-05 7:30 am"
      }
    },
    handleQuestionMode(){
        this.setState({questionMode: true})
    },
    handleNewQuestion(question){
      let currentQuestions = this.state.event.questions;
      currentQuestions.push(question);
      this.setState({"event.questions": currentQuestions, questionMode: false})
    },
    handleType(e){
      this.setState({"event.trainingType": e.target.value})
    },
    handleLocation(e){
      this.setState({"event.location": e.target.value});
    },
    handleDate(newDate){
      this.setState({date: newDate});
    },
    handleSubmit(e){
      e.preventDefault();
      console.log(this.state.date);
    },
    render(){
        const {date, format, mode, inputFormat} = this.state;
        console.log("sdf");
        return(
            <Grid>
                <div className="im-centered">
                    <Row>
                        <Col md={12}  className="text-center">
                            <h4>Create Training Event</h4>
                        </Col>
                    </Row>
                    <form  onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md={12}>
                                <Input type="select" label="Choose training type" placeholder="please select" onChange={this.handleType} required>
                                    <option value="">Please select</option>
                                    <option value="judo">ג'ודו</option>
                                    <option value="weightLift">כוח</option>
                                    <option value="run">ריצה</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text" label="Location" placeholder="Location" onChange={this.handleLocation} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div id="bootstrapOverride">
                                    <DateTimeField  dateTime={date} format={format} inputFormat={inputFormat}   onChange={this.handleDate} />
                                </div>
                            </Col>
                        </Row>
                        {this.state.event.questions? this.state.event.questions.map(question=>{
                            return(
                                <Question key={uuid.v1().toString()} body={question.body}/>
                            )
                        }) : null}
                        <Row>
                            <Col md={12}>
                                {this.state.questionMode? null : <a className="question" href="#" onClick={this.handleQuestionMode}>Add Question</a>}
                            </Col>
                        </Row>
                        {this.state.questionMode? <QuestionForm addQuestion={this.handleNewQuestion}/> : null}
                        <Row>
                            <Col md={12}>
                                {this.state.questionMode? null : <button  type="submit" className="btn btn-primary submitEvent" >Submit</button>}
                            </Col>
                        </Row>
                    </form>
                </div>
            </Grid>


        )
    }
});
export default TrainingEventForm;