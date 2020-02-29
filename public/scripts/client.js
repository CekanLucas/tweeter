/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  // new tweet form handling
  $('#newTweetForm').submit(function(e) {
    e.preventDefault(); //prevent default behaviour of submit
    if (($('#tweetArea').val()).trim().length === 0) {
      $('#errLong').slideUp(500);
      $('#errNone').slideDown(1000);
      return;
    } else {
      if (Number($('#charCounter').text()) < 0) {
        $('#errNone').slideUp(500);
        $('#errLong').slideDown(1000);
        return;
      }
      const data = $('#newTweetForm').serialize();
      return $.ajax({
        method: "POST",
        url: 'http://localhost:8080/tweets',
        data: data //send data to server
      }).then(res => {
        // remove any error messages
        $('#errLong').slideUp(500);
        $('#errNone').slideUp(500);
        $('#tweets-container').children().remove(); //reset tweets
        loadTweets();
      });
    }
  });

  // click hand in nav show/hide form
  $('.write').click(function(e) {
    if ($('.new-tweet').attr('class') === 'new-tweet hide') {
      $('.new-tweet').show(1000);
      $('.new-tweet').removeClass('hide');
      $('.new-tweet').addClass('show');
      $('#tweetArea').focus();
    } else {
      $('.new-tweet').hide(1000);
      $('.new-tweet').removeClass('show');
      $('.new-tweet').addClass('hide');
    }
  });

  const loadTweets = () => { // load tweets on page load
    $.ajax('http://localhost:8080/tweets ',{
      method:'GET'
    })
      .then((tweets) => {
        renderTweets(tweets);
      });
  };
  
  // calculate time when tweet happened
  const calculateTime = t => {
    let ms = Date.now() - t; // difference in ms
    let ndate = new Date(ms); // make new from diff

    arrdate2 = [ // get data from Date object in UTC so no local offset
      {value : ndate.getUTCFullYear() - 1970 ,for:'year(s)'},
      {value : ndate.getUTCMonth()        ,for:'month(s)'},
      {value : ndate.getUTCDate()          ,for:'day(s)'},
      {value : ndate.getUTCHours()        ,for:'hour(s)'},
      {value : ndate.getUTCMinutes()      ,for:'minute(s)'},
      {value : 'Posted just now'          ,for:''}
    ];
    
    const ANS = arrdate2.find((el, i) => {
      if (el.value > 1 || i === 4) {
        return true;
      }
    });
    return ANS.value < 1 ? 'Posted just now' : `Posted ${ANS.value} ${ANS.for} ago`;
  };
  
  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    let tweetArr = [];

    for(tweet in tweets){
      tweetArr.push(tweets[tweet])
    }
    tweetArr.sort( (a,b) => {
      return a.created_at > b.created_at ? -1 : 1;
    }).forEach(tweet => {
      const newTweet = createTweetElement(tweet);
      newTweet.appendTo('#tweets-container');
    });
  };
  
  const createTweetElement = function(tweet) {
    let $tweet = $('<article>').addClass('tweet');
    
    $('<img>').attr('src',tweet.user.avatars).attr('alt',`${tweet.user.nam}`). addClass('avatar').appendTo($tweet);
    $('<span>').addClass('tweetUserName').text(`${tweet.user.name}`).appendTo($tweet);
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
  };
  loadTweets(); // call to load tweets after document renders
});