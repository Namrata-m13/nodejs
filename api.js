var https = require('https')

var username = 'BROWSERSTACK_USERNAME'
var passw = 'BROWSERSTACK_ACCESS_KEY'

var options = {
host: 'api.browserstack.com',
port: 443,
path: '/automate/plan.json',
// authentication headers
headers: {
'Authorization': 'Basic ' + new Buffer(username + ':' + passw).toString('base64')
}
};

//this is the call
request = https.get(options, function (res) {
var body = "";
res.on('data', function (data) {
body += data;
});
res.on('end', function () {
//here we have the full response, html or json object
console.log(body);
})
res.on('error', function (e) {
console.log("Got error: " + e.message);
});
});
