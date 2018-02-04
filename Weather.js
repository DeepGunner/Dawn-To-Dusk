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


  $('#inpt_search').keyup(function(e){
    if(e.keyCode === 13 ){
    var city = $("#inpt_search").val();
    e.preventDefault();
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city +'%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    makeAjaxCall(url, "GET", processUserDetailsResponse);
    
    function processUserDetailsResponse(userData){
    var sRise = userData.query.results.channel.astronomy.sunrise;
    var sSet = userData.query.results.channel.astronomy.sunset;
    $('.rValue').text(sRise);
    $('.sValue').text(sSet);
    $('#inpt_search').text("");
 
    }
    }

});

 














