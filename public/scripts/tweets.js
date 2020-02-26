const tweetJSON = [
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
    "created_at": 1461116232228
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
const tweetsDB = tweetJSON.map(el => {
  return (el);
})

$(document).ready( () => {
  tweetsDB.forEach(tweet => {
    // clone template tweet to create new tweet
    const newTweet = $('.tweet').clone();

    // update tweets from database
    newTweet.children().eq(0).attr('src',tweet.user.avatars);
    newTweet.children().eq(1).text(tweet.user.name);
    newTweet.children().eq(2).text(tweet.user.handle);
    newTweet.children().eq(3).text(tweet.content.text);
    newTweet.children().eq(5).text(tweet.created_at);
 
    newTweet.appendTo('#tweets-container');
  });
  // make cloned tweet template gone
  $('#tweets-container').children().eq(0).css('display','none');
  $('#tweets-container').children().eq(1).css('display','none');
}

)