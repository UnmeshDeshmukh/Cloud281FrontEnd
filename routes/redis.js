var ejs = require("ejs");
var session=require('client-sessions');
var request = require('sync-request');
var https = require("https");
var http = require("http");
var cassandra = require("./cassandra");

exports.addProductIdToRedis = function(req, res) {	
	var email = req.session.email;	
	var product = req.param("productId");
	if (email === undefined) {
		email = "jagrutipatil32@gmail.com";
	}
	
	console.log("Email: "+ email + " " + product);
	var httpcall = request('POST', 'http://team4praj-env.us-west-2.elasticbeanstalk.com/addToCart', {
		  json: { username: email,
			  	  productId: product
			  }
	});
	
	console.log(httpcall.getBody('utf8'));
	var json_responses = {"Status" : "success"};
	cassandra.log("debug", "added " + product + " to cart for user " + email);
	res.send(json_responses);
}

exports.deleteAllFromCart = function(req, res) {	
	var email = req.session.email;	
	if (email === undefined) {
		email = "jagrutipatil32@gmail.com";
	}
	
	var httpcall = request('POST', 'http://team4praj-env.us-west-2.elasticbeanstalk.com/deleteAllCart', {
		  json: { username: email}
	});
	
	var json_responses = {"Status" : "success"};
	cassandra.log("debug", "Order placed by user: " + email);
	res.send(json_responses);
}



exports.getAllProductsInCart = function(req, res) {	
	var email = "";
	email = req.session.email;
	if (email === undefined) {
		email = "jagrutipatil32@gmail.com";
	}
	
	console.log("Email: "+ email);
	var httpcall = request('POST', 'http://team4praj-env.us-west-2.elasticbeanstalk.com/getShoppingCart', {
		  json: { username: email}
	});
	
	var shoppingIds = JSON.parse(httpcall.getBody('utf8'));
	var productList = [];
	for (var i = 0; i < shoppingIds.length; i++) {		
		var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProductById/' + shoppingIds[i];
		var cartId = request('GET', str, {
			 'headers': {
				    'user-agent': 'example-user-agent'
				  }
		});
		var product = cartId.getBody('utf8');
		productList.push(JSON.parse(product));
	}
	
	console.log(productList);
	var json_responses = {"Status" : "success", "data" : productList};
	res.send(json_responses);
}

exports.getProductId = function(req, res) {			
	console.log("Email: "+ email);
	var httpcall = request('POST', 'http://team4praj-env.us-west-2.elasticbeanstalk.com/getShoppingCart', {
		  json: { username: email}
	});
	
	var json = JSON.stringify(httpcall.getBody('utf8'));
	console.log(json);
	var json_responses = {"Status" : "success", "data" : httpcall.getBody('utf8')};
	res.send(json_responses);
}


exports.checkout = function(req, res){
	ejs.renderFile("./views/checkout.ejs", function(err, result) {
		if (!err) {			
			res.end(result);
		}
	});
};