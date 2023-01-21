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

    var saveLocal = localStorage.setItem(json.stringify);
//(when you store)
    var readLocal = localStorage.setItem(json.parse);
// for reading data json.parse
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
});