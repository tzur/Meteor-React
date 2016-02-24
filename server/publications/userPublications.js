/**
 * Created by ZurTene on 2/21/2016.
 */
Meteor.publish('userById', (userId)=>{
   check(userId, String);
   console.log('single user publication');
   return Meteor.users.find({_id: userId}, {fields: {profile: 1}});
});

Meteor.publish('allAthletes', ()=>{
   console.log("All athletes publish");
   return Meteor.users.find({"profile.userType": "athlete"}, {fields: {profile: 1, username: 1}});
});
Meteor.publish('coachAthletes', (coach)=>{
    console.log("coachAthletes publish");
    return Meteor.users.find({_id: {$in: coach.profile.athletes}}, {fields: {profile: 1, username: 1}});
});


