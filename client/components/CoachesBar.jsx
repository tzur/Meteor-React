import React from 'react'

let CoachIcon = React.createClass({
    navToCoach(){
        FlowRouter.go('/user/coaches/' + this.props.name);
    },
    render(){
        return(
            <div className="col-sm-2 col-centered">
                <img className="circleBase circleType" src="http://www.ratemysoccercoach.com/DATA/upload/PNA.gif" />
                <div className="row">
                    <div className="col-sm-12">
                        <span><a onClick={this.navToCoach} value={this.props.name}>{this.props.name}</a></span>
                    </div>
                </div>
            </div>
        )
    }
});
export default CoachIcon;

