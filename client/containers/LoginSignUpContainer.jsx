import React from 'react';
import Login from '../components/login.jsx'
import Signup from '../components/Signup.jsx'
let LoginSignUp = React.createClass({
    PropTypes: {
      handleLogin: React.PropTypes.func.isRequired,
      handleSignup: React.PropTypes.func.isRequired   
    },
    getInitialState(){
        return {
            login: true
        }
    },
    handleSwitchSignup(){
      this.setState({login: false});
    },
    handleSwitchLogin(){
      this.setState({login: true});
    },
    render(){
        return(
            <div>
                {this.state.login? <Login handleLogin={this.props.handleLogin} handleSwitch={this.handleSwitchSignup} /> :
                            <Signup handleSignup={this.props.handleSignup} handleSwitch={this.handleSwitchLogin} />}
            </div>
        )
    }
});

export default LoginSignUp;