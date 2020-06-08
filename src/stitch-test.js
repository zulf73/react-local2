var a = require("mongodb-stitch-browser-sdk");
var Stitch = a.Stitch;
var RemoteMongoClient = a.RemoteMongoClient;

const APP_ID = "5edd2810e0aca46b4ebf1428";
const stitchApp = Stitch.hasAppClient(APP_ID)
    ? Stitch.getAppClient(APP_ID)
    : Stitch.initializeAppClient(APP_ID);
const mongodb = stitchApp.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

const itemsCollection = mongodb.db("prod").collection("uniqueness");
const dJSON = require('dirty-json');
var ans = '';
itemsCollection.findOne({ counter: 3456 })
    .then((result) => {
        if (result) {
            console.log(`Successfully found document: ${result}.`);
            ans = dJSON.parse(result)['Curiosity'];
        } else {
            console.log('No document matches the provided query.');
        }
    })
    .catch((err) => console.error(`Failed to find document: ${err}`));
console.log(ans);
