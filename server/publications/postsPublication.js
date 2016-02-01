Meteor.publish('posts', () => {
    //const selector = {category: {$ne: "private"}};
    return Posts.find({});
});

Meteor.publish('singlePost', _id => {
    check(_id, String);
    console.log("single post publication im here");
    return Posts.find({_id});
});