import React from 'react';
import {Input} from 'react-bootstrap';
import {ButtonInput} from 'react-bootstrap';
import Constants from '../constants';
let Signup = React.createClass({
    getInitialState(){
        return{
            username: '',
            password: '',
            email: '',
            userType: ''
        }
    },
    handleUserName(e){
        this.setState({username: e.target.value});
    },
    handlePassword(e){
        this.setState({password: e.target.value});
    },
    handleEmail(e){
        this.setState({email: e.target.value});
    },
    handleUserType(e){
      this.setState({userType: e.target.value});
    },
    handleSignup(e){
        e.preventDefault();
        this.props.handleSignup({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            userType: this.state.userType
        })
    },
    componentWillMount(){
        if (window.location.href.indexOf('/signup') === -1){
            history.pushState(null, null,'/signup');
        }
    },
    render(){
        return(
            <div className="im-centered">
                <h4>Only one form and you are in!</h4>
                <form className="loginForm" onSubmit={this.handleSignup}>
                    <div className="row">
                        <div className="col-sm-12">
                            <Input type="text" label="Name" placeholder="Please enter your name"
                                   value={this.state.username} onChange={this.handleUserName} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Input type="select" label="Athlete/Coach" onChange={this.handleUserType} required >
                                <option value="">Please select</option>
                                <option value={Constants.ATHLETE}>Athlete </option>
                                <option value={Constants.PERSONAL_COACH}>Personal Coach </option>
                                <option value={Constants.OLYMPIC_COACH}>Olympic Coach </option>
                                <option value={Constants.SHAPE_COACH}>Shape Coach </option>
                                <option value={Constants.SHRINK}>Shrink </option>
                            </Input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Input type="password" label="Password" placeholder=" Please enter your password"
                                   value={this.state.password} onChange={this.handlePassword}  required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Input type="email" label="Email" placeholder="Please enter your Email"
                                   value={this.state.email} onChange={this.handleEmail}  required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary loginBtn">Signup</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href='' onClick={this.props.handleSwitch}>Already have an account? switch to login </a>                        </div>
                    </div>

                </form>
            </div>
        )
    }
});

export default Signup;