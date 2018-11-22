// var Twitter = require("twitter");

var Twitter = require("twitter-node-client").Twitter;
var key = require("./secrets");
var twitter = new Twitter(key);

// var success = function(data) {
//   console.log("Data [%s]", data);
// };

// var error = function(err, response, body) {
//   console.log("ERROR [%s]", err);
// };

// twitter.getUser(
//   { screen_name: "20pCodependence", count: "10" },
//   error,
//   success
// );
export default twitter;
