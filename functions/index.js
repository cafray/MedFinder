const fs = require('fs');
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const corsModule = require('cors');

const cors = corsModule({origin:true});

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.user_signup = functions.https.onRequest((request, response) => {

    cors(request, response, async () =>{

    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Headers", "Content-Type");
    let userDetails = request.body.regData;
    try {
        let regData = {
            usertype: userDetails.usertype,
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            phone: userDetails.phone,
            email: userDetails.email,
            password: userDetails.password
        };
      
        let userRecord = await admin.auth().createUser({
            email: userDetails.email,
            password: userDetails.password
        });
        if(userRecord && userRecord.uid){
            await admin.firestore().collection('Users').doc(userRecord.uid).set(regData);
            response.send({ uid: userRecord.uid });
        }else{
            response.send({ error: "User Not Created" });
        }
    }catch(error){
        response.send({ error: "User Not Created" });
    }

    });

});


exports.add_pharmacy = functions.https.onRequest((request, response) => {

    cors(request, response, async () =>{

    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Headers", "Content-Type");
    let pharmacyDetails = request.body.pharmacyData;
    try {
        let pharmacyData = {
            name: pharmacyDetails.name,
            description: pharmacyDetails.description,
            image: pharmacyDetails.image,
            coordinates: pharmacyDetails.coordinates
        };
      
        if(pharmacyData){
            let pharmacyID = `Pharmacy${Math.floor(1000 + Math.random() * 9000).toString()}`;
            await admin.firestore().collection('Pharmacies').doc(pharmacyID).set(pharmacyData);
            response.send({Message: 'Pharmacy Added Successfuly'});
        }else{
            response.send({ error: "User Not Created" });
        }
    }catch(error){
        response.send({ error: "User Not Created" });
    }

    });

});

exports.add_medication = functions.https.onRequest((request, response) => {

    cors(request, response, async () =>{

    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Headers", "Content-Type");

    let medicationDetails = request.body.medSent;
        try {
        let medsData = {
            medName: medicationDetails.medName,
            image: medicationDetails.image,
            price:medicationDetails.price,
            pharmacyId:medicationDetails.pharmacyID
        };
      
        if(medsData){
            let medicationID = `Medication${Math.floor(1000 + Math.random() * 9000).toString()}`;
            await admin.firestore().collection('Medicines').doc(medicationID).set(medsData);
            response.send({Message: 'Meds Added Successfuly'});
        }else{
            response.send({ error: "Meds Data is not true"});
        }
        }catch(error){
            response.send({ error: "Failed Miserably", medicationDetails});
        }
    });
});
