/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready( () => {
  const calculateTime = t => {
    let ms = Date.now() - t;
    let ndate = new Date(ms);
    let sdate = ndate.toString();
    let arrdate = sdate.split(/[\s:]/g);
    
    arrdate2 = [
      {value : Number(arrdate[3]) - 1970 ,for:'year(s)'},
      {value : ndate.getMonth()          ,for:'month(s)'},
      {value : Number(arrdate[2])        ,for:'day(s)'},
      {value : Number(arrdate[4])        ,for:'hour(s)'},
      {value : Number(arrdate[5])        ,for:'minute(s)'}
    ]
    
    let ANS = 0
    arrdate2.forEach( (el, i) => {
      if(el.value > 1){ANS = el}
      if(i === 4){'Posted just now'}
    })
    return ANS === 'Posted just now' ? ANS : `Posted ${ANS.value} ${ANS.for} ago`;
  }

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    tweets.forEach(tweet => {
      const newTweet = createTweetElement(tweet);
      newTweet.appendTo('#tweets-container');
    });
  }
  
  const createTweetElement = function(tweet) {
    let $tweet = $('<article>').addClass('tweet');
    // update tweets from database
    // newTweet.children().eq(0).attr('src',tweet.user.avatars);
    // newTweet.children().eq(1).text(tweet.user.name);
    // newTweet.children().eq(2).text(tweet.user.handle);
    // newTweet.children().eq(3).text(tweet.content.text);
    // newTweet.children().eq(5).text(calculateTime(tweet.created_at));

    $('<img>').attr('src',tweet.user.avatars).attr('alt',`${tweet.user.nam}`). addClass('avatar').appendTo($tweet);
    $('<span>').addClass('tweetUserName').text(`${tweet.user.name}`).appendTo($tweet)
    $('<span>').addClass('tweetHandle').text(tweet.user.handle).appendTo($tweet);
    $('<p>').addClass('tweetContent').text(tweet.content.text).appendTo($tweet);
    $('<hr>').appendTo($tweet);
    $('<span>').addClass('tweetDate').text(calculateTime(tweet.created_at)).appendTo($tweet);
    $(`<span>
    <a href="http://">&#10084;</a>
    <a href="http://">&#8645;</a>
    <a href="http://">⚐</a>
  </span>`).addClass('tweetOptions').appendTo($tweet);

    return $tweet;
  }

renderTweets(data);

}
)