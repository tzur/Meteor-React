import React from 'react';
import Navigation from '../components/Navigation.jsx';
import LoginSignUpContainer from '../containers/LoginSignUpContainer.jsx';
import {signupUser} from '../modules/modules';
import UserProfileContainer from '../containers/UserProfileContainer.jsx';
import Constants from '../constants';
//TODO CHANGE TO REACT-ROUTER! DELETE ALL THIS FUCKING PAGE.
let App = React.createClass({
    PropTypes: {
      loggingIn: React.PropTypes.bool.isRequired,
      hasUser: React.PropTypes.bool.isRequired
    },
    loading() {
        return <div className="loading"></div>;
    },
    handleSignup(options){
        signupUser(options,(err, result)=>{
            if (err){
                console.error(err)
            }else{
                //if (Meteor.user().profile.userType === Constants.ATHLETE){
                //    FlowRouter.go('/athletes/' + Meteor.userId());
                //}else{
                //    FlowRouter.go('/coaches/'+ Meteor.userId());
                //}
            }
        })
    },
    handleLogin(options, callback){
        Meteor.loginWithPassword(options.email, options.password, (error) =>{
            if (error){
                console.error(error);
                callback(error);
            }else{
                if (Meteor.user().profile.userType === Constants.ATHLETE){
                    FlowRouter.go('/athletes/' + Meteor.userId());
                }else{
                    FlowRouter.go('/coaches/'+ Meteor.userId());
                }
            }
        })
    },
    canView(){
        if (this.props.hasUser) {
            if (FlowRouter.current() && FlowRouter.current().route.path.indexOf('/coaches') > -1) {
                return Meteor.user().profile.userType != Constants.ATHLETE;
            } else if (FlowRouter.current() && FlowRouter.current().route.path.indexOf('/athletes') > -1) {
                return Meteor.user().profile.userType === Constants.ATHLETE;
            }else if (FlowRouter.current() && FlowRouter.current().route.path.indexOf('/login') > -1) {
                return true;
            }else if (window.location.href.indexOf('/coaches') > -1) {
                return Meteor.user().profile.userType != Constants.ATHLETE;
            } else if (window.location.href.indexOf('/athletes') > -1) {
                return Meteor.user().profile.userType === Constants.ATHLETE;
            }else if (window.location.href.indexOf('/login') > -1) {
                return true;
            }
        }else{
            return false
        }


    },
    getContent(){
        if (this.props.content() === null){
            return <UserProfileContainer />
        }else{
            return this.props.content();
        }
    },
    getView()
    {
        return (this.canView()? this.getContent() :
            <LoginSignUpContainer handleLogin={this.handleLogin} handleSignup={this.handleSignup}/>);
    },
    render(){
        return(
            <div>
                <Navigation />
                {this.props.loggingIn?  this.loading() : this.getView()}
            </div>
        )
    }
});
export default App;


//render() {
//    return <div className="app-root">
//        <AppHeader hasUser={this.data.hasUser} />
//        <div className="container">
//            {this.data.loggingIn ? this.loading() : this.getView()}
//        </div>
//    </div>;
//},