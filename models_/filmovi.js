const mongoose = require('mongoose');

const Filmovi = mongoose.model(
    'filmovi', 
    new mongoose.Schema({
        ime: String,
        godina: Date,
        zanr: [String],
        rezija: String,
        oscar: Boolean,
        akteri: [String]
    },
    {
      collection: 'filmovi'
    })
);

const getAll = ()=> {
    return new Promise((success, fail)=> {
        Filmovi.find({}, (err, data) =>{
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const getOne = (id)=> {
    return new Promise((success, fail)=> {
        Filmovi.findById(id, (err, data) =>{
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};


module.exports = {
    getAll,
    getOne
}