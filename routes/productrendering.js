var ejs = require("ejs");
var session=require('client-sessions');
var request = require('sync-request');
var https = require("https");
var http = require("http");


exports.getProductsMenTees = function(req, res) {
	var email = req.session.email;	
	var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProducts/MEN/Tees';
	var httpcall = request('GET', str, {
		 'headers': {
			    'user-agent': 'example-user-agent'
			  }
	});
			
	console.log(httpcall.getBody('utf8'));
	res.send(httpcall.getBody('utf8'));
}


exports.renderMenTeesPage=function(req,res){
	ejs.renderFile("./views/TeesProducts.ejs", function(err, result) {
		if (!err) {			
			res.end(result);
		}
	});
};


exports.getProductsMenJeans = function(req, res) {
	var email = req.session.email;	
	var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProducts/MEN/Jeans';
	var httpcall = request('GET', str, {
		 'headers': {
			    'user-agent': 'example-user-agent'
			  }
	});
			
	console.log(httpcall.getBody('utf8'));
	res.send(httpcall.getBody('utf8'));
}


exports.renderMenJeansPage=function(req,res){
	ejs.renderFile("./views/JeansProducts.ejs", function(err, result) {
		if (!err) {			
			res.end(result);
		}
	});
};

exports.getProductsMenHoods = function(req, res) {
	var email = req.session.email;	
	var str='http://team4praj-env.us-west-2.elasticbeanstalk.com/getProducts/MEN/Hoods';
	var httpcall = request('GET', str, {
		 'headers': {
			    'user-agent': 'example-user-agent'
			  }
	});
			
	console.log(httpcall.getBody('utf8'));
	res.send(httpcall.getBody('utf8'));
}


exports.renderMenHoodsPage=function(req,res){
	ejs.renderFile("./views/HoodsProducts.ejs", function(err, result) {
		if (!err) {			
			res.end(result);
		}
	});
};
