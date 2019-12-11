const UploadFile = (req, res) => {
  var file = req.files.file; //.file-poleto so ke go isprakjame//
  file.mv('./uploads/slika.jpg', err => {
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