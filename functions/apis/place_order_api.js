

'use strict';
var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");



// Get a database reference to our blog
var db = admin.database();
var request ;
var response;

var ordersRef = db.ref("orders");
var order_count = 0;

var orderSchema = {
	isAccepted:'',
	orderId : '',
	userId :'',
	firstName:'',
	lastName:'',
	phoneNumber:'',
	deliveryStatus:'',
	orderLat:'',
	orderLon :'',
	products:[

	],
	orderStatus:'',
	rider:{
		riderId:'',
		riderPhoneNumber:'',
		riderName:''
	},
	payment:{
		amount:'',
		isCod:'',
		codCollected:''
	},
	timingEngine:{
		orderInsertedAt:'',
		orderAcceptedAt:'',
		riderAcceptedAt:'',
		dispatchedAt:'',
		deliveredAt:'',
		returnDate:'',


	},
	orderFulfillment:{
		returnedAt:'',
		returnCondition:'',

	}

};
var orderFailed = {
	isAccepted:''
};
var pid;

// A Order has been Received From user
//Check Whether Product is available
// IF Avaliable Update Quantity from Current Children
// send to Dispatch Unit
// brodcast to Riders
//
//

exports.placeOrderForuser = function(req, res){

	response = res;
	request = req;
	console.log("Inside Order Placer");

};
// 	console.log("Placing Order");
//
//
//
//
// 	order_count++;
//  	// Genereate New Order Id
// 	ordersRef.once("value",snapshot ={
// 		snapshot.forEach(function (singleData) {
// 				// var bookName = singleData.key;
// 				order_count++;
// 		 }).then(insertOrder())
// 		 .catch(errorHanlder());
// 	});
//
// function insertOrder(){
// 	console.log("Initlizing Order Id "+order_count);
// 	orderSchema.orderId = order_count;
//  	orderSchema.userId = request.body.userId;
//  	orderSchema.firstName = request.body.firstName;
//  	orderSchema.lastName  = request.body.lastName;
//  	orderSchema.orderLat = request.body.orderLat;
//  	orderSchema.orderLon = request.body.orderLon;
//  	orderSchema.phoneNumber = request.body.phoneNumber;
//  	//get the List of products
//  	console.log("Got Varaibles " + orderSchema.phoneNumber);
//  	var productsChosenCount = request.body.products.length;
//  	for (var i =0;i < productsChosenCount;i++) {
//  			console.log('inside loop');
// 			try{
// 		 		//Individual Products in Response
// 	 			var pid = request.body.products[i].pid;
//
// 	 			//Insert into this Order
// 	 			//Prepare Packing
// 	 			//Add to PartnerBroadcast Tables
// 				var pName = request.body.products[i].productName;
// 				console.log("Getting Products [i] "+pName);
//  				//parePacking(pid);
//  		 		orderSchema.products.push({pid: pid, productName: pName});
// 	 	}
// 	 	catch(err){
// 	 			console.log("Error "+err);
// 	 	}
//  		//orderSchema.products.product[i].imageUrl = response.products[i].imageUrl;
//   }
//  	// update Order Status
//  	orderSchema.orderStatus = '1';
//
//
//  	console.log("Order Construction complete, pushing...");
//  	//Timing Related Attiribs
//  	// orderSchema.timingEngine.orderAcceptedAt = Date.now();
//   ordersRef.child(orderSchema.orderId).set(orderSchema).then(function(snap){
//  		// We use is Accepted to denote For Client Purposes { A Whole order Copy is Sent along with Insertion status}
// 		 	  orderSchema.isAccepted = '1';
// 				 console.log("Order Inserted ");
// 		 	  response.send(orderSchema);
// 	 });
// };
// function errorHanlder(){
//      orderFailed.isAccepted  ='0';
// 		 response.send(orderFailed);
// };