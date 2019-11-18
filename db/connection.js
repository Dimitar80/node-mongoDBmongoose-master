const mongoose = require('mongoose');
const uri = 
// mongoose.set('useFindAndModify', false);

const init = (config) => {
    mongoose.connect(
        'mongodb+srv://dev:DEV123!@cluster0-3tbei.mongodb.net/videoteka?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(res => {
        // console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
}

const parseCString = (config) => {
    var cs = uri.replace('{username}', config.username);
    cs = cs.replace
}

module.exports = {
    init
};




