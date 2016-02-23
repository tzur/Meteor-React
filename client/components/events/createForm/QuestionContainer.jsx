import React from 'react';
import {Panel} from 'react-bootstrap'
import Question from './Question.jsx';
import uuid from 'node-uuid';
let QuestionContainer = React.createClass({

    PropTypes: {
        questions: React.PropTypes.array.isRequired
    },
    render(){
        return(
            <div className="margin-top">
                <span className="im-bold">Your Questions</span>
                <Panel>
                    <ol className="margin-top">
                    { this.props.questions.map(question=>{
                        return(
                            <li key={uuid.v1().toString()}>{question.body}</li>
                        )
                    })}
                    </ol>
                </Panel>
            </div>

        )
    }

});
export default QuestionContainer;