// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var timeBlocks = $(".time-block");
  const currentDate = dayjs().format('MM-DD-YYYY HH:mm:ss');
  const currentHour = dayjs().format('HH');
  
  $('#currentDay').text(currentDate);

  var textInput = document.getElementById('#text');
  var buttonEl = document.getElementById('#save-button');


  $('#save-button').on('click', function () {
    var textInput = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, textInput);
    console.log(buttonEl);

  
  
  })
  console.log(timeBlocks)
    for (i = 0; i < timeBlocks.length; i++) {
        var timeCompare = timeBlocks[i]
        var timeHour = parseInt(timeCompare.id.split("-")[1])
        
          if (timeHour == currentHour) {
            timeCompare.classList.add("present");      
          } else if (timeHour < currentHour) {
            timeCompare.classList.add("past");
          } else if (timeHour > currentHour) {
            timeCompare.classList.add("future");
          }
    };
//localStorage.setItem(json.stringify) (when you store)
// for reading data json.parse
});






  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
