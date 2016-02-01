import React from 'react';
import Login from '../components/login.jsx';
import Navigation from '../components/Navigation.jsx';
//import loginState from '../containers/LoginContainer';

let AthleteLayout = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        console.log("im here");
        return{
            user: Meteor.user()
        }
    },
    handleLogin(options){
        Accounts.createUser({
            username: options.username,
            password: options.password,
            email: options.email
        }, (err)=>{
            if (err){
                console.log(err)
            }else{
                Meteor.loginWithPassword(options.email, options.password, (error)=>{
                    if (error){
                        console.log(error)
                    }else{
                        this.setState({user: Meteor.user()})
                    }
                });
            }
        })
    },
    render(){
        let component;
        if (this.data.user){
            component = React.cloneElement(this.props.content(),{user: this.data.user})
        }else{
            component= <Login handleLogin={this.handleLogin} />
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