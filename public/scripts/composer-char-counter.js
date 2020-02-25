
$(document).ready(function() {
  $(tweetArea).on('keydown', function(e){
    let counter = $(tweetArea).val().length
    $(charCounter).text(`${counter}`);
  })
});
