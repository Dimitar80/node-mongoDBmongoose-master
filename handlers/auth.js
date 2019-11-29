const mUsers = require('../models_/users');
const vUsers = require('../validators/users');
var validator = require('node-input-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../config/index.js');

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

// hashing //
const register = (req, res) => {
    var v = new validator.Validator(req.body, vUsers.createUser);
    v.check()
    .then(matched => {
        if(matched) {
            bcrypt.genSalt(10, function(err, salt) {
                if(err){
                    throw new Error(err);
                    return;
                }
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if(err){
                        throw new Error(err);
                        return;
                    }
                    return mUsers.createUser({...req.body, password: hash});
                });
            });
        } else {
            throw new Error('Validation failed');
        }
    })
    .then(() => {
        return res.status(201).send('ok');
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send(v.errors);
    });
}


const login = (req, res) => {
    mUsers.getUserPasswordByEmail(req.body.email)
    .then((data) => {
        bcrypt.compare(req.body.password, data.password, function(err, rez) {
            if(err){
                return res.status(500).send('Could not compare password');
            }
            if(rez){
                var tokenData = {
                    id: rez._id,
                    full_name: `${rez.first_name} ${rez.last_name}`,
                    email: rez.email
                };
                var token = jwt.sign(tokenData, config.getConfig('jwt').key);
                return res.status(200).send({jwt: token});
            }
            return res.status(404).send('not found');
        });
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send('Could not get user');
    });
};




const renew = (req, res) => {
    return res.status(200).send('ok');
}

const resetLink = (req, res) => {
    return res.status(200).send('ok');
}

const resetPassword = (req, res) => {
    return res.status(200).send('ok');
}

const changePassword = (req, res) => {
    return res.status(200).send('ok');
}

module.exports = {
    register,
    login,
    renew,
    resetLink,
    resetPassword,
    changePassword
}