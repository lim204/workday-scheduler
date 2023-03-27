// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//    if (tasks.length){
//      $('.description').text(tasks);
//     }
//     $('.saveBtn').on('click', function(){
//        var time = $(this).parent().attr('id');
//        var userInput = $(this).siblings('.description').val();
//        tasks.push(userInput);
//        localStorage.setItem(time,JSON.stringify(userInput));
//        window.location.reload();
//  });
 


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  textInput();
  function textInput() {
    $('.saveBtn').on('click', function () {
      var $el= $(this)
      var time = $el.parent().attr('id');
      var plan = $el.siblings('.description').val();
      localStorage.setItem(time, plan);
    });
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  var currentTime = dayjs().hour();

  var timeBlocks = $('.time-block');

  timeBlocks.each(function () {
    //console.log(this.id);
    var blockId = parseInt(this.id.split('-')[1]);
    //console.log(blockId);
    var $el= $(this)
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? This will get user input of the textarea element from local storage
  $('.time-block').each(function () {
    var $el = $(this)
    var time = $el.attr('id');
    var plan = localStorage.getItem(time);
    $el.children('.description').val(plan);

  })

  // TODO: Add code to display the current date in the header of the page. -->still need to add number suffixes st,nd,th rd Do 
  var today = dayjs();
  $('#currentDay').text(today.format('dddd,MMMM D YYYY'));
  
});




