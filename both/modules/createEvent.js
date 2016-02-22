let createEvent = (eventData, category, callback)=>{
  Meteor.call('addEvent', eventData, category,(err,result)=>{
      if (err){
          callback(err)
      }else{
          callback(undefined, result);
      }
  })
};
export default createEvent;