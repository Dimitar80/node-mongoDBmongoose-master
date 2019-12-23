var mongoose = require('mongoose');



//Models//
var User = mongoose.model(
    'users',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        date_of_birth: Date,
        telephone: String,
        country: String,
        _created: Date,
        _modified: Date
       
    } /*,
    {
        collection: 'user'
    }*/
    )
);

const createUser = (data) => {
    return new Promise((success, fail) => {
        var user = new User(data);
        user.save(/*data,*/ err =>{
            if(err){
                return fail(err);
            }
            return success();
        });
    });
}

// getUserPasswordByEmail //
const getUserPasswordByEmail = (email) => {
    return new Promise((success, fail) => {  // 1 ili 0 - true ili false//
        User.find({email: email}, {password: 1, email: 1, first_name:1, last_name: 1, }, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data[0]); //celiot "Prv" objekt od baza//
        })
    })
}







module.exports = {
    createUser,
    getUserPasswordByEmail
}