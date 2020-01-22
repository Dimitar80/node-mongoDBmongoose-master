const mUsers = require("../models_/users");
const vUsers = require("../validators/users");
var validator = require("node-input-validator");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const config = require("../config/index.js");
// const randomstring = require("randomstring");
// const sgMail = require("@sendgrid/mail");

// register - validator //

// const register = (req, res) => {
//     var v = new validator.Validator(req.body, vUsers.createUser);
//     v.check()
//     .then(matched => {
//         if(matched) {
//             return mUsers.createUser(req.body)
//         } else {
//             throw new Error('Validation failed');
//         }
//     })
//     .then(() => {
//         return res.status(201).send('ok - registration is created');
//     })
//     .catch(err => {
//         console.log(err);
//         return res.status(500).send(v.errors);
//     });
// }

// UGLAV!!! 01-20-2020 //
// hashing //
// DP //
// const register = (req, res) => {
//   var validate = new validator.Validator(req.body, vUsers.createUser);
//   validate.check()
//     .then(matched => {
//       if (matched) {
//         // get user by email
//         return mUsers
//           .getUserPasswordByEmail(req.body.email)
//           .then(ed => {
//             console.log(ed);
//             if (!ed) {
//               bcrypt.genSalt(10, function(err, salt) {
//                 if (err) {
//                   throw new Error(err);
//                   return;
//                 }
//                 bcrypt.hash(req.body.password, salt, function(err, hash) {
//                   if (err) {
//                     throw new Error(err);
//                     return;
//                   }
//                   //   var confirm_hash = randomstring.generate({
//                   //     length: 30,
//                   //     charset: "alphanumeric"
//                   //   });
//                   return mUsers.createUser({
//                     ...req.body,
//                     password: hash
//                     // confirm_hash: confirm_hash,
//                     // confirmed: false
//                   });
//                   //   sgMail.setApiKey(config.getConfig("mailer").key);
//                   //   const msg = {
//                   //     to: req.body.email,
//                   //     from: "designcrafts.mk@gmail.com",
//                   //     subject: "Thanks for registering",
//                   //     text: "Thanks for registering",
//                   //     html: `<a href="http://localhost:8081/api/v1/confirm/${confirm_hash}">Click here to confirm your account</a>`
//                   //   };
//                   //   sgMail.send(msg);
//                   //   return;
//                 });
//               });
//             } else {
//               throw new Error("Bad Request - User Exists");
//             }
//           })
//           .catch(err => {
//             throw new Error(err);
//           });
//       } else {
//         throw new Error("Validation failed");
//       }
//     })
//     .then(() => {
//       return res.status(201).send("ok-new user is registered/created");
//     })
//     .catch(err => {
//       console.log(err);
//       return res.status(500).send(validate.errors);
//     });
// };

//Meto //
const register = (req, res) => {
  var validate = new validator.Validator(req.body, vUsers.createUser);
  validate
    .check()
    .then(matched => {
      if (matched) {
        bcrypt.genSalt(10, function(err, salt) {
          if (err) {
            throw new Error(err);
            return;
          }
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            if (err) {
              throw new Error(err);
              return;
            }
            return mUsers.createUser({ ...req.body, password: hash });
          });
        });
      } else {
        throw new Error("Validation failed!");
      }
    })
    .then(() => {
      return res.status(201).send("ok-User is Registered");
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(validate.errors);
    });
};

//STEF//
// const register = (req, res) => {
//     const newUser = req.body;
//     var validate = new validator.Validator(newUser, userValidator.createUser)
//     validate.check()
//     .then(matched => {
//         if(matched) {
//             bcrypt.genSalt(10, function(err, salt) {
//                 if(err) {
//                     throw new Error(err);
//                     return;
//                 }
//                 bcrypt.hash(newUser.password, salt, function(err, hash) {
//                     if(err) {
//                         throw new Error(err);
//                         return;
//                     }
//                     return authModel.register({...newUser, password: hash})
//                 })
//             })
//         } else {
//             throw new Error("Validation failed!");
//         }
//     })
//     .then(() => {
//         return res.status(201).send("OK");
//     })
//     .catch(err => {
//         console.log(err);
//         return res.status(500).send(validate.errors);
//     })
// }

// DP //
// const login = (req, res) => {
//   mUsers
//     .getUserPasswordByEmail(req.body.email)
//     .then(data => {
//       bcrypt.compare(req.body.password, data.password, function(err, rez) {
//         if (err) {
//           return res.status(500).send("Could not compare password");
//         }
//         if (rez) {
//           var tokenData = {
//             id: data._id,
//             full_name: `${data.first_name} ${data.last_name}`,
//             email: data.email
//             // exp:
//           };
//           var token = jwt.sign(tokenData, config.getConfig("jwt").key);
//           return res.status(200).send({
//             jwt: token,
//             first_name: data.first_name,
//             last_name: data.last_name
//           });
//         }
//         return res.status(404).send("not found");
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       return res.status(500).send("Could not get user");
//     });
// };

//Meto //
const login = (req, res) => {
  mUsers
    .getUserPasswordByEmail(req.body.email)
    .then(data => {
      bcrypt.compare(req.body.password, data.password, (err, result) => {
        if (err) {
          return res.status(500).send("Could not compare passwords");
        }
        if (result) {
          var tokenData = {
            id: data._id,
            full_name: `${data.first_name} ${data.last_name}`,
            email: data.email
          };
          var token = jwt.sign(tokenData, config.getConfig("jwt").key);
          return res.status(200).send({
            jwt: token,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
          });
        }
        return res.status(400).send("not found");
      });
    })
    .catch(err => {
      return res.status(500).send("Could not get user");
    });
};

const confirm = (req, res) => {
  var hash = req.params.confirm_hash;
  mUsers
    .confirmUserAccount(hash)
    .then(() => {
      return res.status(200).send("ok");
    })
    .catch(err => {
      return res.status(500).send("internal Server Error");
    });
};

const renew = (req, res) => {
  return res.status(200).send(req.user);
  // return res.status(200).send('ok');
};

const resetLink = (req, res) => {
  return res.status(200).send("ok");
};

const resetPassword = (req, res) => {
  return res.status(200).send("ok");
};

const changePassword = (req, res) => {
  return res.status(200).send("ok");
};

module.exports = {
  register,
  login,
  renew,
  resetLink,
  resetPassword,
  changePassword,
  confirm
};
