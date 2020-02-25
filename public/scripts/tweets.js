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
    // avatar
    newTweet.children().first().attr('src',tweet.user.avatars);
 
    newTweet.appendTo('#tweets-container');
    console.log($('#tweets-container').first())
  });
// .first() first child 
// .next() next sibling
}

)