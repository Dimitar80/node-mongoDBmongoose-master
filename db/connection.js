const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const init = () => {
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

module.exports = {
    init
};




