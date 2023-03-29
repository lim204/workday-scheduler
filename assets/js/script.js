 
$(function () {
  // listener for click events on the save button.
  // use the id in the containing time-block as a key to save the user input in local storage

  textInput();
  function textInput() {
    $('.saveBtn').on('click', function () {
      var $el = $(this)
      var time = $el.parent().attr('id');
      var plan = $el.siblings('.description').val();
      localStorage.setItem(time, plan);
    });
  }

  var currentTime = dayjs().hour();
  // color-block apply the past, present, or future class to each time

  var timeBlocks = $('.time-block');

  timeBlocks.each(function () {
    //console.log(this.id);
    var blockId = parseInt(this.id.split('-')[1]);
    //console.log(blockId);
    var $el = $(this)
    if (blockId < currentTime) {
      $el.addClass('past');
    } else if (blockId === currentTime) {
      $el.removeClass('future')
      $el.removeClass('past');
      $el.addClass('present');
    } else {
      $el.removeClass('present');
      $el.removeClass('past');
      $el.addClass('future');
    }
  });

  // this get the user input of the values of the corresponding textarea elements and save it in localStorage 

  $('.time-block').each(function () {
    var $el = $(this)
    var time = $el.attr('id');
    var plan = localStorage.getItem(time);
    $el.children('.description').val(plan);
  })

  // Display the current date in the header of the page. 
  var today = dayjs();
  $('#currentDay').text(today.format('dddd,MMMM D YYYY'));
   
});




