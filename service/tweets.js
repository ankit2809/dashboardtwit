'use strict';
const Twit = require('twit')
const config = require('./config.js')
require('log-timestamp');

//var qword = req.body.search_keyword
//console.log(qword)

var T = new Twit(config)
//var twit_message = []
var twit_params = {q:"stuttgart", count : 2}
//var twit_params = {q:qword, count : 2}   // Convert q into a variable and get the value from findkeyword
T.get('search/tweets', twit_params, gotData)

function gotData(err, data) {
 var tweets = data.statuses;
 for (var i = 0; i < tweets.length; i++) {
     //console.log(qword + " : " + tweets[i].created_at + " : " + tweets[i].text);
     //message.push(tweets[i].text);
     //twit_message.push({keyword:qword,created:tweets[i].created_at,text:tweets[i].text})
     console.log(tweets[i].text)
}
}
var tweets = {
    fetch : function(req, res, next){


    }


}

module.exports = tweets