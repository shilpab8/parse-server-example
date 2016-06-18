
Parse.Cloud.define('hello', function(req, res) {
  var twilio = require('twilio')('AC1c5d074299795e11907706bc8c34325d', '4293afaf04268d42c02aabaf2237b67f');
  res.success('Hi');
});
