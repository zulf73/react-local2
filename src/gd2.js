const mongo = require('mongodb').MongoClient
const url = 'mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net/?retryWrites=true&w=majority'

var ans = '';
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client_) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log('connection success');
    client = client_;
    const db = client.db('prod');
    const collection = db.collection('uniqueness');
    collection.findOne({ counter: 3425 }, (err, item) => {
        console.log(item)
        ans = item['Curiosity']
    });
});
console.log(ans);


