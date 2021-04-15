const express = require('express');
const route = express.Router()
//const services = require('../services/render');
const controller = require('../controller/controller');
var myModule = require('../model/model');
var noteDB = myModule.method;

// main webpage
route.get('/', async(req, res) => {
    const quotes = await noteDB.find();
    res.render('../views/index', { quotes: quotes });
});

// get entries
route.get('/quotes', async (req, res) => {
    const quotes = await noteDB.find()
    res.send(quotes)
});

// add entry
route.post('/quotes', async (req, res) => {
    let entry = await new noteDB({
        note: req.body.note
    });
    try {
        entry = await entry.save();
        res.redirect('/');
    } catch (e) {
        console.log(e)
        res.render('index');
    }
});

// delete
route.route('/remove/:id').get((req,res) => {
    const id = req.params.id;
    noteDB.findByIdAndRemove(id, err => {
        if (err ) return res.send(500, err);
        res.redirect('/');
    });
});

// get one entry
route.get('/quotes/:id', async (req, res) => {
    try {
        const entry = await noteDB.findOne({ _id: req.params.id })
        res.send(entry)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
});

module.exports = route;