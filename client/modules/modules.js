export function signupUser(options, callback){
    Accounts.createUser({
    username: options.username,
    password: options.password,
    email: options.email
    }, (err)=>{
        if (err){
            callback(err);
        }else{
            Meteor.loginWithPassword(options.email, options.password, (error)=>{
                if (error){
                    callback(err);
                }else{
                    Meteor.call('addUserType', options.userType, (err, result) =>{
                        if (err){
                            callback(err);
                        } else{
                            callback(undefined, result)
                        }
                    });
                }
            });
        }
    })
}
export function insertAthletesToCoach(athletesArray, callback){
    Meteor.call('addAthletesArrayToCoach', athletesArray, (err,result)=>{
        if(err){
            callback(err);
        }else{
            callback(undefined, result);
        }
    })
}
export function EventFactory(trainingType, location, date, questions){
    console.log("factory");
    this.trainingType = trainingType;
    this.location = location;
    this.date = date;
    this.questions = questions;
}
EventFactory.prototype.save = function(athletes, category ,callback){
    if (!athletes || !category){
        callback(new Error("No athletes or category were given to the create function."))
    }
    let self = this;
    Meteor.call('addEvent', self, athletes ,category,(err,result)=>{
        if (err){
            callback(err)
        }else{
            callback(null, result);
        }
    })
};