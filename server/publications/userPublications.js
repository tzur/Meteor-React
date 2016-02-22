/**
 * Created by ZurTene on 2/21/2016.
 */
Meteor.publish('userById', (userId)=>{
   check(userId, String);
   console.log('single user publication');
   return Meteor.users.find({_id: userId}, {fields: {profile: 1}});
});