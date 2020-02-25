
$(document).ready(function() {
  $(tweetArea).on('keydown', e => {
    let value = $(tweetArea).val().length
    $(charCounter).text(`${value}`);
    console.log(value);
  })
});
