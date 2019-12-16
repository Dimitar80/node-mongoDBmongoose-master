const express = require ('express');
const config = require('../config/index.js');
const files = require('../handlers/files');
const fileupload = require('express-fileupload');
var jwt = require('express-jwt');


const api = express();
//middleware//
api.use(
    jwt(
        {secret: config.getConfig('jwt').key}
    )
);

//middleware//
api.use(fileupload({
    limits: {fileSize: 50 * 1024 * 1024},
}));

api.post('/api/v1/upload', files.UploadFile);
api.get('/api/v1/upload/:filename', files.Downloadfile);
api.listen(8002, err => {
    // console.log(api)
    if(err){
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Server started successfully on port 8002');
});