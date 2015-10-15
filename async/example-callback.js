var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Morristown,NJ&units=Imperial&appid=98e68ce0aa22c0b151aa6aaba5891e20';

request({
  url: url,
  json: true},
  function(error, response, body) {
    if (error) {
      console.log('Unable to fetch weather.');
    }
    else {
      //console.log(JSON.stringify(body, null, 4));

      console.log("It's " + body.main.temp + " in Morristown.");
    }

});
