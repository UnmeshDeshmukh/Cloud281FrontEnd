var ejs = require("ejs");
var session=require('client-sessions');
var request = require('sync-request');
var https = require("https");
var http = require("http");
var cassandra = require("./cassandra");


exports.getRecommendations = function(req, res) {
	var shoppingIds = {};
	var product = req.param("productId");
	var str = 'http://team4praj-env.us-west-2.elasticbeanstalk.com/getRecommendations/' + product;
	var httpcall = request('GET', str, {
		 'headers': {
			    'user-agent': 'example-user-agent'
			  }
	});			
	
	cassandra.log("debug", "Getting recommendations for Product Id: " + product);
	shoppingIds = JSON.parse(httpcall.getBody('utf8'));
	var productList = [];
	for (var i = 0; i < 4; i++) {		
		var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProductById/' + shoppingIds[i];
		var cartId = request('GET', str, {
			 'headers': {
				    'user-agent': 'example-user-agent'
				  }
		});
		var productJson = cartId.getBody('utf8');
		productList.push(JSON.parse(productJson));
	}
	
	console.log(productList);
	var json_responses = {"Status" : "success", "data" : productList};
	res.send(json_responses);
};