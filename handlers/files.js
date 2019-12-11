const randomString = require('randomstring');

const UploadFile = (req, res) => {
  var file = req.files.file; //.file-poleto so ke go isprakjame//

  console.log(file);
  if(file.size > 10 * 1024 * 1024){
    return res.status(500).send('Filesize too big');
  }

  var allowedTypes = [
      'image/png', 
      'image/jpg', 
      'image/jpeg', 
      'image/jpeg', 
      'image/gif' 
  ];

    if(allowedTypes.indexOf(file.mimetype) == -1){
        return res.status(500).send('Filetype not on the list');
    }

    var prefix = randomString.generate({
        lenght: 10,
        charset: 'alphanumeric'
    })

  file.mv(`./uploads/${prefix}_${file.name}`, err => {
      if(err){
          console.log(err)
          return res.status(500).send('Internal Server Error');
      }
      return res.status(200).send('ok');
  });
}


module.exports = {
    UploadFile
}