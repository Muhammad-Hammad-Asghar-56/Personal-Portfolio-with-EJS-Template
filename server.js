// ref profolio:  https://p.w3layouts.com/demos/sep-2016/15-09-2016/preface/web/#
// const functions = require("firebase-functions");
const express=require('express');
var nodemailer = require('nodemailer'); 
const bodyParser = require('body-parser');

// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoDhNO7aDHqHJO8qmDTFVK9wgoOzNwieM",
  authDomain: "personalportfolio-374716.firebaseapp.com",
  projectId: "personalportfolio-374716",
  storageBucket: "personalportfolio-374716.appspot.com",
  messagingSenderId: "662752414558",
  appId: "1:662752414558:web:62053ecdd5d30350e29dcf",
  measurementId: "G-MW3Q2ZNNXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const port=80;
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/protfolio',(req,res)=>{
    res.render('index')
})
app.get('/resumeDownload',(req,res)=>{
    res.download('./static/Reume_Muhammad Hammad Asghar.pdf');
})
app.post('/portfolio/message',(req,res)=>{
    message=req.body.message;
    yourEmail=req.body.email;
    personName=req.body.name;
    phoneNo=req.body.phoneNo;
    // if(message != null  && yourEmail != null && personName != null  && phoneNo!= null ){
        //     let transporter = nodemailer.createTransport({
        //         service: 'gmail',
        //         auth: {
        //           type: 'OAuth2',
        //           user: process.env.MAIL_USERNAME,
        //           pass: process.env.MAIL_PASSWORD,
        //           clientId: process.env.OAUTH_CLIENTID,
        //           clientSecret: process.env.OAUTH_CLIENT_SECRET,
        //           refreshToken: process.env.OAUTH_REFRESH_TOKEN
        //         }
        //       });
        //     message=message +"Messge was send From the "+ personName+ "," + phoneNo;
        //     var mailOptions = {
        //         from: yourEmail,
        //         to: 'hammadasgharm@gmail.com',
        //         subject: 'Contact from the Resume.com',
        //         text: message
        //     };
            
        //     transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //         console.log(error);
                
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // }); 
    // }
    // else{
    //     console.log("Invalid input");
    // }
    res.redirect('/protfolio');
})
app.listen(port,(req,res)=>{
    console.log("Server is running at the "+port);
})
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// exports.app=functions.https.onRequest(app)