
let eventToMongo = (category)=>{
    return "profile.events." + category;
};
Meteor.methods({
    addUserType(userType){
        check(userType, String);
        try{
            Meteor.users.update({_id: Meteor.userId()}, {
                $set: {"profile.userType": userType}
            })
        }catch(e){
            throw e;
        }
        return userType;
    },
    addJudoEvent(userId, event){
        check(userId, String);
        try{
            Meteor.users.update({_id: userId}, {
                $addToSet: {"profile.events.judo": event}
            })
        }catch(e){
            throw e;
        }
    },
    addCompetitionEvent(userId, event){
        check(userId, String);
        try{
            Meteor.users.update({_id: userId}, {
                $addToSet: {"profile.events.competition": event}
            })
        }
        catch(e){
            throw e;
        }
    },
    addQuestionToEvent(userId, eventType,eventTitle, question){
        if (Meteor.isServer){
            question.id = new Mongo.ObjectID();
            question._id = question.id._str;

        }
        if (eventType === "judo"){
            Meteor.users.update({_id:userId, "profile.events.judo.title": eventTitle}, {
                $addToSet: {"profile.events.judo.$.questions": question}
            })
        }

    },
    addEvent(eventObj, category){
        let position = eventToMongo(category);
        try{
            Meteor.users.update({_id: eventObj.userId}, {
                $addToSet: {position: eventObj}
            })
        }catch(e){
            throw e;
        }
        return "success";

    },
    addAthletesArrayToCoach(athletesArray){
        let result;
        try{
            result = Meteor.users.update({_id: Meteor.userId()}, {
                $addToSet: {"profile.athletes": {$each: athletesArray}}
            })
        }catch(e){
            throw e;
        }
        return result;

    }

});