var http = require('http');
var express = require('express');
var blockstore = require('blockstore');
var crypto = require('crypto');
//var bl = require('bl');
var querystring = require('querystring');
var blockstore = require('blockstore');

var app = express();

const PROVIDER_PORT= 80;
const PROVIDER_URL= "http://www.firstuaserver.com"

app.use(express.bodyParser())

function getRequestOptions(url){
  return  = {
    hostname: provider,
    port: 80,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

function GetProfile(storeUrl, callback) {
    var request = http.request(getRequestOptions(storeUrl), function (response) {
        var reqText= '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        response.on('data', function (chunk) {
            reqText += chunk;
        }
        
        res.on('end', function() {
            callback(querystring.parse(reqText));
        });
 
        querystring.parse(
          
      });
      
    });
}

function connectProfile (request, response) {
		// Check parameters
		var id = request.body.id;
		console.log('id= ' + id)
		
		// Save connection data
		var socket = request.connection;
		var ipAddr = socket.remoteAddress;
		var port = socket.remotePort;

		// Lookup profile on the blockstore
    blockstore.lookup(id, (storeUrl, console.error) => {
        if (err) {
            // Replyto client that the id could not be resolved
            response.statusCode = 404;
            response.end();
        }
        
        //  HACKATHON: Get profile from datastore
        
        // Reply to the client with profile info
        console.log("lookup successful! url= " + storeUrl);
        response.statusCode = 200;
        response.write(querystring.stringify({id: id, provider: PROVIDER_URL, profile: profile}
        response.end();
    });
    
}

function  createProfile (request, response) {
    // Check parameters
    var id = request.body.id;
    var primaryFactor = request.body.primaryFactor;
    var secondaryFactor = secondaryFactors[1];
    console.log('id= ' + id)
		console.log('primaryFactor= ' + primaryFactor)
		console.log('secondaryFactors[1]= ' + secondaryFactor)


    // Generate keypair
    // Change to 2048 for production
    var Diffhell = crypto.createDiffieHellman(256);
    var pubKey = Diffhell.generateKeys();
    var privKey = Diffhell.getPrivateKey

    // 
    blockstore.reserve(id, privKey, function (url, err) {
        if (err) {
            // HACKATHON: Post to client that the id could not be reserved
        }
        console.log("reservation successful! url= " + url);

                // Reply to the client with profile info
        console.log("lookup successful! url= " + storeUrl);
        response.statusCode = 200;
        response.write(querystring.stringify({id: id, provider: PROVIDER_URL, profile: storeUrl}
        response.end();

        url.
    });
}

app.post('/', function (request, response) {
	var method = request.body.method;
	console.log('method= ' + method)
	if (method == 'connectProfile') {
    connectProfile (request, response);
	}
	if (method == 'createProfile') {
    createProfile (request, response);
  }
)

console.log("start");
var server = app.listen(PROVIDER_PORT);
