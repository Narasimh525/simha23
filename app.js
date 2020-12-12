var express = require('express');
var app = express();
const requestIp = require('request-ip');
var request = require('request');
app.get('/',(req,res)=>{
    const clientIp = requestIp.getClientIp(req); 
    request(`http://api.ipapi.com/`+clientIp+`?access_key=188d866004417a0868000ed358d64675`,(error,response,body)=>{
        console.log(body);
        res.send(body);

    });
    console.log("simha");
})

app.listen(4223)