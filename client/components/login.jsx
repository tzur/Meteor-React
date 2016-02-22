import React from 'react';
import {Input} from 'react-bootstrap';
import {ButtonInput} from 'react-bootstrap';
import {Alert} from 'react-bootstrap'

let Login = React.createClass({
    getInitialState(){
        return{
            username: '',
            password: '',
            email: '',
            userType: '',
            wrongAuth: false
        }
    },
    handlePassword(e){
        this.setState({password: e.target.value})
    },
    handleEmail(e){
        this.setState({email: e.target.value})
    },
    handleLogin(e){
        e.preventDefault();
        this.props.handleLogin({
            password: this.state.password,
            email: this.state.email
        }, (err)=>{
            if (err){
                setTimeout(()=>{
                   this.setState({wrongAuth: false})
                },2000);
                this.setState({wrongAuth: true})
            }
        })
    },
    render(){
        return(
            <div className="im-centered">
                <h4>Welcome to Reviews please login </h4>
                {this.state.wrongAuth?
                    <Alert bsStyle="warning">
                        <strong>Wrong login details!</strong>
                    </Alert> : null }
                <form className="loginForm row-centered" onSubmit={this.handleLogin}>
                    <div className="row">
                        <div className="col-sm-12">
                            <Input type="email" label="Email" placeholder="Please enter your Email"
                                   value={this.state.email} onChange={this.handleEmail}  required />
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
                            <button type="submit" className="btn btn-primary loginBtn">Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a  href='#' onClick={this.props.handleSwitch}>Doesn't have account? Sign up </a>
                        </div>
                    </div>
                </form>

            </div>

        )
    }
});

export default Login;