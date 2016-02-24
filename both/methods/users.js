
let addToSetForEvent = (category, eventObj)=>{
    let setModifier = {$addToSet: {}};
    console.log(eventObj);
    setModifier.$addToSet['profile.event.' + category] = eventObj;
    return setModifier;
};
Meteor.methods({
    addUserType(userType){
        check(userType, String);
        try{
            if (userType ==='athlete'){
                Meteor.users.update({_id: Meteor.userId()}, {
                    $set: {"profile.userType": userType}
                })
            }else{
                Meteor.users.update({_id: Meteor.userId()}, {
                    $set: {"profile.userType": userType, "profile.athletes": []}
                })
            }

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
    addEvent(eventObj,athletes, category){
        check(eventObj, Object);
        check(athletes, Array);
        check(category, String);
        let addToSetModifier = addToSetForEvent(category, eventObj);
        try{
            console.log(athletes);
            Meteor.users.update({_id: {$in: athletes}}, addToSetModifier, { multi: true });
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