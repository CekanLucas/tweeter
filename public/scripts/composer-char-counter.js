
$(document).ready(function() {
  $(tweetArea).on('input', function(e){
    let textArea = $(tweetArea)
    let counter = 140 - $(tweetArea).val().length;
    let charCounter = textArea.siblings('.counter')
    charCounter.text(counter);
    counter < 0 ? 
      charCounter.addClass('warning') : 
      charCounter.removeClass('warning');
  })
});