var myModule = require('../model/model');

var quotesDB = myModule.method;

exports.find = (req, res)=>{
    quotesDB.find()
        .then(entry =>{
            res.send(entry)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error occured"})
        })
}
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const entry = new quotesDB({
        name:req.body.name,
        quote:req.body.quote
    })

    entry
        .save(entry)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occured"
            });
        });
}