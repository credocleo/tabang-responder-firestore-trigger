'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const login = require("facebook-chat-api");

// exports.receiveAlerts = functions.firestore
//     .document('reports/{report}')
//     .onCreate(async (snap, context) => {
//         console.log("receive alerts")
//         console.log("context: ", context)
//         console.log("snap: ", snap)
//         console.log("_fieldsProto: ", snap._fieldsProto)
//         console.log("lat: ", snap._fieldsProto.lat)
//         // console.log("lng: ", snap._fieldsProto.lng)
//         // console.log("lng: ", snap._fieldsProto.emergency)

//         // console.log('before data: ', snap.before.data())
//         // console.log('after data: ', snap.after.data())
        
//         return snap
//     });

    exports.receiveReports = functions.https.onRequest(async (req, res) => {
        console.log("req object: ", req)
        console.log("req METHOD: ", req.method)
        console.log("data: ", req.params)
        console.log("req: ", req.body)

        
        db.collection('reports')
        .add({
            desc: req.body.text,
            lng: 123.8888898,
            lat: 10.3127439, 
            time: req.body.time
        })
        .then(response => {
            console.log("response: ", response)
            const document_ref = response.path
            console.log("document ref: ", response.path)
            db.collection('/hospitals/Ffv7QjIh6VbiLiYTl8An/reports')
            .add({
                reportReference: document_ref,
                desc: req.body.text,
                lng: 123.8888898,
                lat: 10.3127439,
                time: req.body.time
            })
            res.send(response.path)
        });
    })

    exports.receiveReports2 = functions.https.onRequest(async (req, res) => {
        console.log("req object: ", req)
        console.log("req METHOD: ", req.method)
        console.log("data: ", req.params)
        console.log("req: ", req.body)

        
        db.collection('reports')
        .add({
            desc: req.body.text,
            lng: 123.8888898,
            lat: 10.3127439, 
            time: req.body.time
        })
        .then(response => {
            console.log("response: ", response)
            const document_ref = response.path
            console.log("document ref: ", response.path)
            db.collection('/baranggay/R85cO2Pf4St48nzYS2LW/reports')
            .add({
                reportReference: document_ref,
                desc: req.body.text,
                lng: 123.8888898,
                lat: 10.3127439,
                time: req.body.time
            })
            res.send(response.path)
        });
    })

    exports.fbMessaging = functions.https.onRequest(async (req, res) => {
        login({email: "clarisselallaineerika", password: "P@ssword01"}, (err, api) => {
            if(err) return console.error(err);
        
            var yourID = "000000000000000";
            var msg = "Hey!";
            api.sendMessage(msg, yourID);
        });
    })
    