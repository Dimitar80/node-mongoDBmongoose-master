// const mFilmovi = require('../models/filmovi')
const mFilmovi = require('../models_/filmovi');

const getAll = (req, res) => {
    mFilmovi.getAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

const getOne = (req, res) => {
    mFilmovi.getOne(req.params.id)
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

const save = (req, res) => {
    res.send('OK');
}

const replace =(req, res) => {
    res.send('OK');
}

const update = (req, res) => {
    res.send('OK');
}

const remove = (req, res) => {
    res.send('OK');
}





module.exports = {
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
}