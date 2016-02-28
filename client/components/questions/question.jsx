import React from 'react';
import {Panel} from 'react-bootstrap';
let Question = React.createClass({
    PropTypes: {
      question: React.PropTypes.object.isRequired
    },
    render(){
        let answerComponent;
        if (this.props.question.answers){
            answerComponent = this.props.question.answers.map(answer => {
                return <Answer answer="doggg" />
            })
        }else{
            answerComponent = null;
        }
        return(
            <Panel header={this.props.question.body}>Sample Answer</Panel>
        )
    }
});
export default Question;