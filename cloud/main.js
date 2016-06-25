
// Create the Cloud Function
Parse.Cloud.define("inviteWithTwilio", function(request, response) {
  var twilio = require('twilio')('AC1c5d074299795e11907706bc8c34325d', '4293afaf04268d42c02aabaf2237b67f');
  // Use the Twilio Cloud Module to send an SMS
  twilio.sendSMS({
    From: "+14698047798",
    To: request.params.number,
    Body: request.params.code
  }, {
    success: function(httpResponse) { response.success("SMS sent!"); },
    error: function(httpResponse) { response.error("Uh oh, something went wrong"); }
  });
});
