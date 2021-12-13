

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = __dirname +"/views/index.html";

app.get('/', function (req, res) {
    res.sendFile(path);
})
app.use(express.static(__dirname + "/public"));

app.get("/api/:date",function(req, res,next){
  let date_string = req.params.date;
  if(isNaN(date_string)){
   var date = new Date(date_string).toUTCString();
   var time = new Date(date_string).getTime();
   res.json({'unix':time,'utx':date});
  }
  else{
   var time = new Date(Number(req.params.date)).getTime();
   var date = new Date(time).toUTCString();
   res.json({'unix':time,'utx':date});
  }
})
app.get('/timestamp', function(req, res){
  var time=new Date().getTime();
  var date=new Date().toUTCString();
  res.json({'unix':time,'utx':date});
})

 module.exports = app;
 