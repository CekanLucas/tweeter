
$(document).ready(function() {
  $(tweetArea).on('keydown', function(e){
    let counter = this.val().length
    $(charCounter).text(`${counter}`);
  })
});
