const senti = require('sentiment')
var async = require('async');

var twitterData = [];
async.each(tweets.statuses, function (item, callEach) {
    var sentScore = senti(item.text, function (err, data) {
        var tweet_sentiment = '';
        if(data.score==0){
            tweet_sentiment = 'neutral'
        }else if(data.score>0){
            tweet_sentiment = 'positive'
        }else if(data.score<0){
            tweet_sentiment = 'negative'
        }
        twitterData.push({
            sentiment: tweet_sentiment,
            score: data.score,
            tweet: item.text
        });
        callEach(); 
    });
}, function () {
    callback(null, twitterData);
});