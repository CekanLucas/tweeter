
$(document).ready(function() {
  $(tweetArea).on('keydown', e => {
    // note this is not working for my live preview extention fix when ready
    let counter = $(tweetArea).val().length
    $(charCounter).text(`${counter}`);
  })
});
