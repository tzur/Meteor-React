import React from 'react';
import LoginSignUp from '../containers/LoginSignUpContainer.jsx';
import Navigation from '../components/Navigation.jsx';
import {signupUser} from '../modules/modules';
import Constants from '../constants';
//import loginState from '../containers/LoginContainer';

let AthleteLayout = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        console.log("im here");
        return{
            user: Meteor.user()
        }
    },

    render(){
        let component;
        if (this.data.user && this.data.user.profile){
            if (this.data.user.profile.userType === Constants.ATHLETE && this.data.user.username != "zurzzzz") {
                FlowRouter.go('/athletes/' + Meteor.userId());
            }else if(this.data.user.username != "zurzzzz"){
                FlowRouter.go('/coaches/' + Meteor.userId());
            }
            component = React.cloneElement(this.props.content(),{userId: this.data.user._id})
        }else{
            component= <LoginSignUp handleSignup={this.handleSignup} handleLogin={this.handleLogin} />
        }
        return(
            <div>
                <Navigation />
                {component}
            </div>
        )
    }
});
export default AthleteLayout;