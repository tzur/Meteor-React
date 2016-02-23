import React from 'react';
import {Input} from 'react-bootstrap';
let AthletesSelect = React.createClass({
   PropTypes: {
       athletes: React.PropTypes.array.isRequired,
       handleAthleteSelect: React.PropTypes.func.isRequired
   },
   getInitialState(){
       return{
       }
   },
    handleClick(e){
        this.props.handleAthleteSelect(e);
    },
    render(){
        return(
            <div>
                {this.props.athletes.map(athlete => {
                    return(
                        <div key={athlete._id}>
                            <Input type="checkbox" value={athlete._id} onClick={this.handleClick}/>
                            {athlete.username}
                        </div>
                    )
                })}
            </div>
        )
    }
});
export default AthletesSelect;