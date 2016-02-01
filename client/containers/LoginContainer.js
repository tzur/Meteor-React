

function loginState(callback){
    Tracker.autorun(()=>{
        callback(Meteor.user());
    });
}

export default loginState;