import React from 'react';
import Navigation from '../components/Navigation.jsx';
import LoginSignUpContainer from '../containers/LoginSignUpContainer.jsx';
import {signupUser} from '../modules/modules';
import UserProfileContainer from '../containers/UserProfileContainer.jsx';
import Constants from '../constants';
//TODO CHANGE TO REACT-ROUTER! DELETE ALL THIS FUCKING PAGE.
let App = React.createClass({
    //mixins: [ ReactMeteorData ],
    //getMeteorData() {
    //    return {
    //        loggingIn: Meteor.loggingIn(),
    //        hasUser: !!Meteor.user(),
    //        isPublic( route ) {
    //            let publicRoutes = [
    //                'login'
    //            ];
    //            return publicRoutes.indexOf( route ) > -1;
    //        },
    //        isCoach( route){
    //            let coachRoutes = [
    //                'createEvent',
    //                'coachProfile'
    //            ];
    //            return coachRoutes.indexOf(route) > -1;
    //        },
    //        isAthlete( route ){
    //            let athleteRoutes = [
    //                'athleteProfile'
    //            ];
    //            return athleteRoutes.indexOf(route) > -1
    //        },
    //        canView() {
    //            console.log("Sdf");
    //            if (this.isCoach(FlowRouter.current().route.name) && Meteor.user().profile){
    //                return (Meteor.user().profile.userType != Constants.ATHLETE)
    //            }else if (this.isAthlete(FlowRouter.current().route.name && Meteor.user().profile)){
    //                return (Meteor.user().profile.userType === Constants.ATHLETE);
    //            }else{
    //                return this.isPublic( FlowRouter.current().route.name ) || !!Meteor.user();
    //            }
    //        }
    //    };
    //},
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
                if (Meteor.user().profile.userType === Constants.ATHLETE){
                    FlowRouter.go('/athletes/' + Meteor.userId());
                }else{
                    FlowRouter.go('/coaches/'+ Meteor.userId());
                }
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
            if (window.location.href.indexOf('/coaches') > -1) {
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