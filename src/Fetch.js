import React, { useState, Component } from 'react';
/*
function get_data2() {

    const mongoose = require("mongoose");
    mongoose.connect('mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net/prod?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    const connection = mongoose.connection;
    connection.once("open", function () {
        console.log("Connection with MongoDB was successful");
    });

    var Schema = mongoose.Schema;
    const uniqueness = mongoose.model('uniqueness', Schema(
        {
            counter: Number,
            Curiosity: Number
        }
    ));

    let query = uniqueness.find().where('counter').equals(324);
    //query instanceof mongoose.Query; // true

    // Execute the query
    var ans = '';
    query.exec().then(
        (d) => {
            ans = d[0];
        });
    return (ans);
}
*/

/*

const stitchApp = Stitch.initializeDefaultAppClient("<Your App ID>");
const mongodb = stitchApp.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
const itemsCollection = mongodb.db("store").collection("items");
const purchasesCollection = mongodb.db("store").collection("purchases");

*/


function get_data() {
    var ans = null;
    const axios = require('axios');
    const dJSON = require('dirty-json');
    axios.get('http://localhost:8007?counter=8765')
        .then((d) => {
            ans = dJSON.parse(d.data);
            console.log(ans['Abstractness']);
        })
        .catch((err) => {
            console.log(err)
        });
    return (ans);
}

/*
function get_data3() {
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
    return (ans);
}
*/

function get_data2() {
    const mongo = require('mongodb').MongoClient;
    const url = 'mongodb://unique:unique@cluster0-3cmqe.mongodb.net/?retryWrites=true&w=majority';
    var ans = '';
    mongo.connect(url, {
        //useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.error(err)
            return;
        }
        console.log('connection success');
        const db = client.db('prod');
        const collection = db.collection('uniqueness');
        collection.findOne({ counter: 3425 }, (err, item) => {
            console.log(item)
            ans = item['Curiosity']
        });
    });
    return (ans);
}



function get_data_test2() {
    return 'testData';
}

export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.data = '';
        this.state = { data: '' };
    }

    componentDidMount() {
        var x = get_data();
        this.data = x;
        this.setState({ data: [x] });
    }

    render() {
        var x = this.data;
        return (
            <div>
                <p>Test</p>
                <p> first {x} </p>
                <p> second this.data {this.data}</p>
                <p> third this.props.data {this.state['data']}</p>
            </div>
        );
    }
}