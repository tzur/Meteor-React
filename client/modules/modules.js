let signupUser = (options, callback)=>{
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
};
export default signupUser;