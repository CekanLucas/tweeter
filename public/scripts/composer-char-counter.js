
$(document).ready(function() {
  let cc = 0; // character counter
  $(tweetArea).on('keydown', e => {
    let value = $(tweetArea).val().length
    console.log(value);
  })
});
