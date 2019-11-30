var mongoose = require('mongoose');



//Models//
var User = mongoose.model(
    'users',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String
    })
);

const createUser = (data) => {
    return new Promise((success, fail) => {
        var user = new User(data);
        user.save(err =>{
            if(err){
                return fail(err);
            }
            return success();
        });
    });
}

// getUserPasswordByEmail //
const getUserPasswordByEmail = (email) => {
    return new Promise((success, fail) => {
        User.find({email: email}, {password: 1, email: 1, first_name:1, last_name: 1}, (err, data) => {
            if(err){
                return fail(err);
            }
            console.log(data[0])
            return success(data[0]);
        })
    })
}







module.exports = {
    createUser,
    getUserPasswordByEmail
}