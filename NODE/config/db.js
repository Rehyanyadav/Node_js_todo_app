const mongoose = require ('mongoose');  



const connection = mongoose.createConnection('mongodb://localhost:27017/testing_todo').on('open',()=>{
    console.log('MongoDB connection established');

}).on('error', () => {

    console.log('MongoDB connection error');

});


module.exports = connection;
