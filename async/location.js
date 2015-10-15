module.exports = function(callback) {
  var url = 'http://ipinfo.io';
  var request = require('request');

  request({
    url: url,
    json: true},
    function(error, response, body) {
      if (error) {
        callback('Error retrieving location information.');
      }
      else {
        callback(body);
      }

    }
  );
}
