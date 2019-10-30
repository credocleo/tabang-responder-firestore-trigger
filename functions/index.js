'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.receiveAlerts = functions.firestore
    .document('reports/{report}')
    .onCreate(async (snap, context) => {
        console.log("receive alerts")
        console.log("context: ", context)
        console.log("snap: ", snap)
        console.log("_fieldsProto: ", snap._fieldsProto)
        console.log("lat: ", snap._fieldsProto.lat)
        // console.log("lng: ", snap._fieldsProto.lng)
        // console.log("lng: ", snap._fieldsProto.emergency)

        // console.log('before data: ', snap.before.data())
        // console.log('after data: ', snap.after.data())
        
        return snap
    });

