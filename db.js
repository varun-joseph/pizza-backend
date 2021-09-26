const mongoose  = require("mongoose");

var mongoURL = 'mongodb+srv://naga:naga@cluster0.oil7a.mongodb.net/pizza-app'


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })

var db = mongoose.connection
db.on('connected' ,() =>{
    console.log('Mongo db connection successfull');

})
db.on('error' ,() =>{
    console.log('connection failed');
})

module.exports = mongoose