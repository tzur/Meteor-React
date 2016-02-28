import React from 'react'
import Constants from '../../constants';
import AthleteProfile from './AthleteProfile.jsx';
import CoachProfile from './CoachProfile.jsx';

let UserProfile = React.createClass({

   render(){
       let component;
       if (this.props.user.profile.userType === Constants.ATHLETE){
           component = <AthleteProfile user={this.props.user}/>;
       }else{
           component =  <CoachProfile user={this.props.user}/>;
       }
       return(
           <div>
               {component}
           </div>

       )
   }
});
export default UserProfile;