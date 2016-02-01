import React from 'react';

Meteor.methods({
   insertPost(newPost){
       check(newPost, Object);
       let postId = "";
       try{
          postId = Posts.insert(newPost)
       }catch(e){
           return e;
       }
       return postId;
   },
   addCoach(data){
       check(data, Object);
       Meteor.users.update({_id: Meteor.userId()}, {
           $addToSet:{'profile.userCoaches': data}
       })
   }
});