// Get date and time from moment.js and display when page loads
var today = moment().format("LLLL");
$("#currentDay").html(today);
console.log(today);

// var workDay = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime);


var $text9 = $("#text9");
console.log(text9);
text9.textContent = "testing";



// check if current time is passed 9am-5pm
$("textarea").each(function() {
    var name = parseInt($(this).attr("name"));
    if (name < currentTime) {
        $(this).addClass("past");
    } else if (name === currentTime) {
        $(this).addClass("current");
    } else {
        $(this).addClass("future");
    }
});


// $(".saveBtn").on("click", function() {
//     var userTask = $(this).siblings("textarea").hour();
//     var timeblockHour
// })

// function loadTimeblock () {
//     $("#9").val(localStorage.getItem("9"));
// }