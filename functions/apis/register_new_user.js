

'use strict';

var express = require('express');
var admin = require("firebase-admin");


var db = admin.database();

var response;
var request;


var userSchema = {
	userId:'',
	firstName:'',
	lastName:'',
	emailAddress:'',
	phoneNumber:'',
	password:'',
	defLat :'',
	defLon:'',
	myOrders:[],
	myCart:[]

};

var failed = {
	status :0
};


/*Getting user variables*/

exports.register =  function(req,res) {

	response = res;
	request = req;

	///Get Details
	userSchema.firstName = req.body.firstName;
	userSchema.lastName = req.body.lastName;
	userSchema.emailAddress = req.body.emailAddress;
	userSchema.password= req.body.password;
	userSchema.phoneNumber = req.body.phoneNumber;

 	var usersRef = db.ref("users");
 	
    usersRef.once("value",function(snap) {
  		 pushUser(snap.numChildren());
	});
 	
};




function pushUser(userId){

	console.log("pushing user at "+userId);

	//Adding Count to user Object
	userSchema.userId = userId;


	//Pushing to User Ref
     var usersRef = db.ref("users");
     usersRef.child(userSchema.userId).set(userSchema)
     .then(snap => {

     	//pushed, user object, is now "snap"
     	//Appending operation status to result
     		userSchema.status = '1';
     		if (!response.headersSent) {
				response.send(userSchema);
     		}
     		
     })
     .catch(function(error){
     	console.log("Error at Pushing Registartion "+error);
     	if (!response.headersSent) {
				response.send(failed);
     		}

     });
};