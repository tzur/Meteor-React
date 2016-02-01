import React from 'react';

let Login = React.createClass({
    getInitialState(){
        return{
            username: '',
            password: '',
            email: ''
        }
    },
    handleUserName(e){
        this.setState({username: e.target.value})
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
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
    },
    render(){
        return(
            <form className="loginForm" onSubmit={this.handleLogin}>
                <input type="text" className="form-control" placeholder="username" value={this.state.username} onChange={this.handleUserName} required />
                <input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={this.handlePassword}  required />
                <input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={this.handleEmail}  required />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        )
    }
});

export default Login;