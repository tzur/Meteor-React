Posts = new Mongo.Collection('posts');
Coaches = new Mongo.Collection('coaches');
JudoTrainings = new Mongo.Collection('judoTrainings');
if(Meteor.isServer) {
    Posts.remove({});
    Posts.insert({
        _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
    });
    Posts.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
    Posts.insert({_id: 'three', title: 'My Secret Post', category: 'private'});
}