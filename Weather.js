//var request = require('request');
function makeAjaxCall(url, methodType){
   var xhr = new XMLHttpRequest();
   xhr.open(methodType, url, true);
   xhr.send();
   xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
        if (xhr.status === 200){
           console.log("xhr done successfully");
           var resp = xhr.responseText;
           var respJson = JSON.parse(resp);
        } else {
          console.log("xhr failed");
        }
     } else {
        console.log("xhr processing going on");
     }
  }
  console.log("request sent succesfully");
}

var city = 'Delhi';

var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city +'%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
makeAjaxCall(url, "GET");

// request(url, function (error, response, body) {
   
//   if(!error && response.statusCode == 200){
//     console.log(body); // Print the HTML for the Google homepage.
//     var data = JSON.parse(body);
//     console.log('Sunrise and Sunset timings in ' + city + ':\nSunrise :'+ data.query.results.channel.astronomy.sunrise+'\nSunset :'+data.query.results.channel.astronomy.sunset);
//   }
  
  
// });
 



//var city = $(".city").






