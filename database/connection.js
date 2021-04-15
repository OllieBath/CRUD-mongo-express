const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://admin:Cactus15!@127.0.0.1:27017/notes?authSource=admin&w=1'

const connectDB = async() => {
    try{
        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            auth:{authdb:"admin"}
        })
        console.log('mongodb connected');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;