var mongoose = require("mongoose");

//Models//
const User = mongoose.model(
  "users",
  new mongoose.Schema(
    {
      first_name: String,
      last_name: String,
      email: String,
      password: String,
      date_of_birth: Date,
      telephone: String,
      country: String,
      _created: Date,
      _modified: Date,
      confirm_hash: String,
      confirmed: Boolean
    } /*,
    {
        collection: 'user'
    }*/
  )
);

// UGLAV!!! 01-20-2020 //
const createUser = data => {
  return new Promise((success, fail) => {
    var user = new User(data);
    user.save(
      /*data,*/ err => {
        if (err) {
          return fail(err);
        }
        return success();
      }
    );
  });
};

const getUserPasswordByEmail = email => {
  return new Promise((success, fail) => {
    // 1 ili 0 - true ili false//
    User.find(
      { email: email },
      //   { password: 1, email: 1, first_name: 1, last_name: 1 },
      (err, data) => {
        if (err) {
          return fail(err);
        }
        return success(data[0]); //celiot "Prv" objekt od baza//
      }
    );
  });
};

// const login = (email) => {
//     return new Promise((success,fail) => {
//         User.find({email: email}, (err,data) => {
//             if(err) {
//                 console.log(err);
//                 return fail(err);
//             }
//             return success(data[0])
//         })
//     })
// }

const confirmUserAccount = hash => {
  return new Promise((success, fail) => {
    User.update({ confirm_hash: hash }, { confirmed: true }, err => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

module.exports = {
  createUser,
  getUserPasswordByEmail,
  confirmUserAccount
};
