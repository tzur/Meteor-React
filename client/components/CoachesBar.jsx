import React from 'react'

let CoachIcon = React.createClass({
    changeCoach(e){
        console.log("Sdfdsf");
      this.props.changeCoach(this.props.job);
    },
    render(){
        return(
        <div className="row row-centered coachBar">
            <div className="col-md-2 col-centered col-max">
                <div className="circleBase circleType">{this.props.name} </div>
                <span><a href="#" value={this.props.job} onClick={this.changeCoach}>{this.props.job}</a></span>
            </div>
        </div>
        )
    }
});
export default CoachIcon;

