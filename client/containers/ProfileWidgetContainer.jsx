//import React from 'react';
//
//let ProfileWidgetContainer = React.createClass({
//    mixins: [ReactMeteorData],
//    getMeteorData(){
//        let handle =  Meteor.subscribe('singlePost', this.props.postId);
//        return{
//            loading: !handle.ready(),
//            post: Posts.findOne(this.props.postId)
//        }
//    },
//});