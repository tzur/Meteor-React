import React from 'react';
import {Input} from 'react-bootstrap';
let AthletesSelect = React.createClass({
   PropTypes: {
       athletes: React.PropTypes.array.isRequired,
       handleAthleteSelect: React.PropTypes.func.isRequired,
       checkedArray: React.PropTypes.array.isRequired
   },
   getInitialState(){
       return{
       }
   },
    handleClick(e){
        this.props.handleAthleteSelect(e);
    },
    handleDefaultValue(athleteId){
        if (this.props.checkedArray.indexOf(athleteId) > -1){
            return true;
        }else{
            return false;
        }
    },
    componentWillMount(){
      console.log("Sdfdsf");
    },
    render(){
        return(
            <div className="athlete-select">
                {this.props.athletes.map(athlete => {
                    return(
                        <div key={athlete._id}>
                            <Input type="checkbox" checked={this.handleDefaultValue(athlete._id)}
                                                            value={athlete._id} onChange={this.handleClick}/>
                            {athlete.username}
                        </div>
                    )
                })}
            </div>
        )
    }
});
export default AthletesSelect;