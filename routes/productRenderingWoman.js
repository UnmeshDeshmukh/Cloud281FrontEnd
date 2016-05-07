var ejs = require("ejs");
var session=require('client-sessions');
var request = require('sync-request');
var https = require("https");
var http = require("http");

//TOPS OF WOMEN
exports.getWomenTopsProducts = function(req, res) {
	var email = req.session.email;	
	var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProducts/WOMEN/Tops';
	var httpcall = request('GET', str, {
		 'headers': {
			    'user-agent': 'example-user-agent'
			  }
	});
			
	console.log(httpcall.getBody('utf8'));
	res.send(httpcall.getBody('utf8'));
};


exports.renderWomenTopsPage=function(req,res){
	ejs.renderFile("./views/TopsProducts.ejs", function(err, result) {
		if (!err) {			
			res.end(result);
		}
	});
};

//JEANS OF WOMEN
exports.getWomenJeansProducts = function(req, res) {
	var email = req.session.email;	
	var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProducts/WOMEN/Jeans';
	var httpcall = request('GET', str, {
		 'headers': {
			    'user-agent': 'example-user-agent'
			  }
	});
			
	console.log(httpcall.getBody('utf8'));
	res.send(httpcall.getBody('utf8'));
};


exports.renderWomenJeansPage=function(req,res){
	ejs.renderFile("./views/JeansWomenProducts.ejs", function(err, result) {
		if (!err) {			
			res.end(result);
		}
	});
};


//DRESS FOR WOMEN
exports.getWomenDressProducts = function(req, res) {
	var email = req.session.email;	
	var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProducts/WOMEN/Dress';
	var httpcall = request('GET', str, {
		 'headers': {
			    'user-agent': 'example-user-agent'
			  }
	});
			
	console.log(httpcall.getBody('utf8'));
	res.send(httpcall.getBody('utf8'));
};


exports.renderWomenDressPage=function(req,res){
	ejs.renderFile("./views/WomenDressProducts.ejs", function(err, result) {
		if (!err) {			
			res.end(result);
		}
	});
};