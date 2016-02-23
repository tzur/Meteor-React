import React from 'react';
import {Grid, Row, Col, Input, Panel} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import QuestionForm from '../createForm/QuestionForm.jsx';
import moment from "moment";
import QuestionContainer from './QuestionContainer.jsx';
import AthletesSelect from '../admin/AthletesSelect.jsx';
let TrainingEventForm = React.createClass({
    PropTypes: {
        coachAthletes: React.PropTypes.array.isRequired
    },
    getInitialState(){
      return {
          question: null,
          event: {
              athletes: [],
              trainingType: null,
              location: null,
              questions: [],
              date:"2016-02-23 7:30 am"
          }
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
          let currentQuestions = this.state.event.questions;
          currentQuestions.push({body: this.state.question});
          this.setState({"event.questions": currentQuestions, question: ""});
      }
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
    handleAthleteSelect(e){
        let currentState = this.state.event.athletes;
        let athleteIndex = 0;
        if (e.target.checked){
            currentState.push(e.target.value);
            this.setState({"event.athletes": currentState});
        }else{
            for (athleteIndex; athleteIndex< currentState.length; athleteIndex++){
                if (currentState[athleteIndex] === e.target.value){
                    break;
                }
            }
            //Safety check
            if (athleteIndex < currentState.length && currentState[athleteIndex] === e.target.value){
                currentState.splice(athleteIndex,1);
                this.setState({"event.athletes": currentState});
            }else{
                console.error("Some weird shit just happened");
            }
        }
    },
    handleSubmit(e){
      e.preventDefault();
      console.log(this.state.event.date);
      console.log(this.state.event.questions);
      console.log(this.state.event.athletes);
    },
    render(){
        const format = "YYYY-MM-DD h:mm a";
        const inputFormat = "DD/MM/YYYY h:mm a";
        const date = this.state.event.date;
        return(
            <Grid>
                <div className="im-centered">
                    <form  onSubmit={this.handleSubmit} className="createEventForm">
                        <AthletesSelect athletes={this.props.coachAthletes} handleAthleteSelect={this.handleAthleteSelect} />
                        <Row>
                            <Col md={12} xs={12}>
                                <Input type="select" label="Choose training type" placeholder="please select" onChange={this.handleType} required>
                                    <option value="">Please select</option>
                                    <option value="judo">ג'ודו</option>
                                    <option value="weightLift">כוח</option>
                                    <option value="run">ריצה</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12}>
                                <Input type="text" label="Location" placeholder="Location" onChange={this.handleLocation} />
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
                        {this.state.event.questions.length? <QuestionContainer questions={this.state.event.questions} /> : null}
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
