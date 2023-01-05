// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(document).ready(function () {
    var now = moment().format("MMMM YYYY");
    let shownDate = document.getElementById("currentDay");
    shownDate.innerHTML = now;
    let nowHour = moment().format("HH");
  
    $("#clearFieldsBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
  
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
  
      if (nowHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-");
      localStorage.setItem(time, value);
  
      console.log(localStorage);
    });
  
    $("hour-09 .time-block").val(localStorage.getItem("09"));
    $("hour-10 .time-block").val(localStorage.getItem("10"));
    $("hour-11 .time-block").val(localStorage.getItem("11"));
    $("hour-12 .time-block").val(localStorage.getItem("12"));
    $("hour-13 .time-block").val(localStorage.getItem("13"));
    $("hour-14 .time-block").val(localStorage.getItem("14"));
    $("hour-15 .time-block").val(localStorage.getItem("15"));
    $("hour-16 .time-block").val(localStorage.getItem("16"));
    $("hour-17 .time-block").val(localStorage.getItem("17"));
    });




  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.