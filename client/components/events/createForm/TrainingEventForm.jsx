import React from 'react';
import {Grid, Row, Col, Input, Panel} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import QuestionForm from '../createForm/QuestionForm.jsx';
import moment from "moment";
import QuestionContainer from './QuestionContainer.jsx';
import AthletesSelect from '../admin/AthletesSelect.jsx';

import Constants from '../../../constants';
let TrainingEventForm = React.createClass({
    PropTypes: {
        coachAthletes: React.PropTypes.array.isRequired,
        handleSubmit: React.PropTypes.func.isRequired
    },
    getInitialState(){
      return {
          question: null,
          athletes: [],
          trainingType: "",
          location: null,
          questions: [],
          date:"2016-02-23 7:30 am"
      }
    },
    handleQuestionMode(e){
        if (e.currentTarget.className){
            this.setState({questionMode: "Close"});
        }else{
            this.setState({questionMode: "Add Question"});
        }
    },
    handleQuestion(e){
      this.setState({question: e.target.value});
    },
    handleNewQuestion(e){
      e.preventDefault();
      if (this.state.question != null && this.state.question != ""){
          let currentQuestions = this.state.questions;
          currentQuestions.push({body: this.state.question});
          this.setState({questions: currentQuestions, question: ""});
      }
    },
    handleType(e){
      this.setState({trainingType: e.target.value})
    },
    handleLocation(e){
      this.setState({location: e.target.value});
    },
    handleDate(newDate){
      this.setState({date: newDate});
    },
    handleAthleteSelect(e){
        let currentState = this.state.athletes;
        let athleteIndex = 0;
        if (e.target.checked){
            currentState.push(e.target.value);
            this.setState({athletes: currentState});
        }else{
            for (athleteIndex; athleteIndex< currentState.length; athleteIndex++){
                if (currentState[athleteIndex] === e.target.value){
                    break;
                }
            }
            //Safety check
            if (athleteIndex < currentState.length && currentState[athleteIndex] === e.target.value){
                currentState.splice(athleteIndex,1);
                this.setState({athletes: currentState});
            }else{
                console.error("Some weird shit just happened");
            }
        }
    },
    clearForm(){
      this.setState({
          question: null,
          athletes: [],
          trainingType: "",
          location: null,
          questions: [],
          date:"2016-02-23 7:30 am"
      })
    },
    handleSubmit(e){
      e.preventDefault();
      this.props.handleSubmit(this.state.athletes, this.state.trainingType, this.state.location,
                                this.state.date, this.state.questions, Constants.TRAINING,
          (err, result)=>{
              if (err){
                  window.alert("Something bad happend");
              }else{
                  this.clearForm();
              }
          });

    },
    render(){
        const format = "YYYY-MM-DD h:mm a";
        const inputFormat = "DD/MM/YYYY h:mm a";
        const date = this.state.date;
        return(
            <Grid>
                <div className="im-centered">
                    <form  onSubmit={this.handleSubmit} className="createEventForm">
                        <span className="im-bold">Select your Athletes </span>
                        <AthletesSelect athletes={this.props.coachAthletes} checkedArray={this.state.athletes} handleAthleteSelect={this.handleAthleteSelect} />
                        <Row>
                            <Col md={12} xs={12}>
                                <Input type="select" label="Choose the training type" value={this.state.trainingType} onChange={this.handleType} required>
                                    <option value="">Please select</option>
                                    <option value="judo">ג'ודו</option>
                                    <option value="weightLift">כוח</option>
                                    <option value="run">ריצה</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12}>
                                <Input type="text" label="Location" value={this.state.location} placeholder="Location" onChange={this.handleLocation} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12}>
                                <div id="bootstrapOverride">
                                    <span className="im-bold">Date</span>
                                    <DateTimeField  dateTime={date} format={format} inputFormat={inputFormat}  onChange={this.handleDate} />
                                </div>
                            </Col>
                        </Row>
                        {this.state.questions.length? <QuestionContainer questions={this.state.questions} /> : null}
                        <Row className="margin-top">
                            <Col md={10} xs={10} className="questionBody">
                                <Input  label="Enter your question" type="text" value={this.state.question} onChange={this.handleQuestion}/>
                            </Col>
                            <Col md={1} xs={1} className="addQuestionBtn">
                                <button type="button" className="btn btn-success" onClick={this.handleNewQuestion}>+</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12}>
                              <button  type="submit" className="btn btn-primary submitEvent" >Submit</button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Grid>
        )
    }
});
export default TrainingEventForm;
