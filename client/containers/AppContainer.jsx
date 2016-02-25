import React from 'react';
import App from '../layouts/App.jsx';

let AppContainer = React.createClass({
   PropTypes: {
     content: React.PropTypes.func.isRequired
   },
   mixins: [ReactMeteorData],
   getMeteorData(){
       return{
           loggingIn: Meteor.loggingIn(),
           hasUser: !!Meteor.user()
       }
   },
   render(){
       return(
           <div>
               {this.data.hasUser? <App hasUser={true} content={this.props.content} /> :
                                        <App hasUser={false}  />}
           </div>

           )
   }
});
export default AppContainer;