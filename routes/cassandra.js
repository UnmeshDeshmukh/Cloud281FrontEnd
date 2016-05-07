var ejs = require("ejs");
var session=require('client-sessions');
var request = require('sync-request');
var https = require("https");
var http = require("http");

exports.log = function(inLevel, inMessage){	
		var httpcall = request('POST', 'http://team4praj-env.us-west-2.elasticbeanstalk.com/log', {
			  json: { level: inLevel,
				  	  message: inMessage
				  }
		});		
};