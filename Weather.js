//var request = require('request');
jQuery(document).ready(function($){
     var city = 'Delhi';

var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city +'%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
// request(url, function (error, response, body) {
   
//   if(!error && response.statusCode == 200){
//     console.log(body); // Print the HTML for the Google homepage.
//     var data = JSON.parse(body);
//     console.log('Sunrise and Sunset timings in ' + city + ':\nSunrise :'+ data.query.results.channel.astronomy.sunrise+'\nSunset :'+data.query.results.channel.astronomy.sunset);
//   }
  
  
// });
$.ajax({
  url: url,
  type: 'GET',
  dataType: 'json',
  //data: params,
  success: function(response) {
    return response.access_token;
  },
  error: function(error) {
    return 'ERROR in webdamAuthenticate';
  }
});
//your stuff
});




//var city = $(".city").






