//var request = require('request');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

function makeAjaxCall(url, methodType,callback){
   var xhr = new XMLHttpRequest();
   xhr.open(methodType, url, true);
   xhr.send();
   xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
        if (xhr.status === 200){
           console.log("xhr done successfully");
           var resp = xhr.responseText;
           var respJson = JSON.parse(resp);
          callback(respJson);
        } else {
          console.log("xhr failed");
        }
     } else {
        console.log("xhr processing going on");
     }
  }
  console.log("request sent succesfully");

}

document.querySelector(".search").addEventListener("click",
 function(){
 
var city = document.querySelector(".city").value;
 var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city +'%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
 makeAjaxCall(url, "GET", processUserDetailsResponse);
});

function processUserDetailsResponse(userData){
console.log(userData.query.results.channel.astronomy);
//console.log('Sunrise and Sunset timings in ' + city + ':\nSunrise :'+ userData.query.results.astronomy.sunrise+'\nSunset :'+data.query.results.channel.astronomy.sunset);
  
}








