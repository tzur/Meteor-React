import React from 'react';
import Navigation from '../components/Navigation.jsx';
import LoginSignUpContainer from '../containers/LoginSignUpContainer.jsx';
import {signupUser} from '../modules/modules';

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
            canView() {
                return this.isPublic( FlowRouter.current().route.name ) || !!Meteor.user();
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
                console.log(result)
            }
        })
    },
    handleLogin(options, callback){
        Meteor.loginWithPassword(options.email, options.password, (error) =>{
            if (error){
                console.error(error);
                callback(error);
            }else{
                this.setState({user: Meteor.user()});
            }
        })
    },
    getView() {
        return this.data.canView() ? this.props.content() :
            <LoginSignUpContainer handleLogin={this.handleLogin} handleSignup={this.handleSignup} />;
    },

    render(){
        return(
            <div>
                <Navigation />
                {this.data.loggingIn? this.loading() : this.getView()}
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