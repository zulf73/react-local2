const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net/prod?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", function () {
    console.log("Connection with MongoDB was successful");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    // we're connected!
});

console.log('before schema');
var Schema = mongoose.Schema;
const uniqueness = mongoose.model('uniqueness', Schema(
    {
        counter: Number,
        Curiosity: Number
    }
));

console.log('after scheme');

var query = uniqueness.findOne({ counter: 3452 });
query.select('counter Curiosity');
query.exec().then(
    (doc) => {
        console.log(doc);
    });

// Execute the query
//var ans = '';
//let query = uniqueness.findOne({ 'counter': 324 }, (d) => { ans = d[0]; });

//console.log(ans);
