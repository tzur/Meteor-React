import React from 'react';
import Navigation from '../components/Navigation.jsx';
import LoginSignUpContainer from '../containers/LoginSignUpContainer.jsx';
import {signupUser} from '../modules/modules';
import UserProfileContainer from '../containers/UserProfileContainer.jsx';
import Constants from '../constants';
//TODO CHANGE TO REACT-ROUTER! DELETE ALL THIS FUCKING PAGE.
let App = React.createClass({
    mixins: [ ReactMeteorData ],
    getMeteorData() {
        return {
            loggingIn: Meteor.loggingIn(),
            hasUser: !!Meteor.user(),
            isPublic( route ) {
                let publicRoutes = [
                    'login'
                ];
                return publicRoutes.indexOf( route ) > -1;
            },
            isCoach( route){
                let coachRoutes = [
                    'createEvent',
                    'coachProfile'
                ];
                return coachRoutes.indexOf(route) > -1;
            },
            isAthlete( route ){
                let athleteRoutes = [
                    'athleteProfile'
                ];
                return athleteRoutes.indexOf(route) > -1
            },
            canView() {
                console.log("Sdf");
                if (this.isCoach(FlowRouter.current().route.name) && Meteor.user().profile){
                    return (Meteor.user().profile.userType != Constants.ATHLETE)
                }else if (this.isAthlete(FlowRouter.current().route.name && Meteor.user().profile)){
                    return (Meteor.user().profile.userType === Constants.ATHLETE);
                }else{
                    return this.isPublic( FlowRouter.current().route.name ) || !!Meteor.user();
                }
            }
        };
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
    getView()
    {
        return (this.data.canView()? this.props.content() :
            <LoginSignUpContainer handleLogin={this.handleLogin} handleSignup={this.handleSignup}/>);

    },
    componentWillMount(){

    },
    render(){
        return(
            <div>
                <Navigation />
                {this.data.hasUser? this.getView() :
                    <LoginSignUpContainer handleLogin={this.handleLogin} handleSignup={this.handleSignup} />}
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