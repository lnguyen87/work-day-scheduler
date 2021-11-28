// Get date and time from moment.js and display when page loads
var today = moment().format("LLLL");
$("#currentDay").html(today);
console.log(today);

// var workDay = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime);


var $text9 = $("#text9");
var $text10 = $("#text10");
var $text11 = $("#text11");
var $text12 = $("#text12");
var $text13 = $("#text13");
var $text14 = $("#text14");
var $text15 = $("#text15");
var $text16 = $("#text16");
var $text17 = $("#text17");
text10.textContent = "testing";



// check if current time is passed 9am-5pm
$("textarea").each(function() {
    var name = parseInt($(this).attr("name"));
    // styles past time to grey
    if (name < currentTime) {
        $(this).addClass("past");
    // styles current time to red
    } else if (name === currentTime) {
        $(this).addClass("present");
    // styles future time to green
    } else {
        $(this).addClass("future");
    }
});

// when save button clicked, data stored to local storage
$(".saveBtn").on("click", function() {
    localStorage.setItem("9AM", JSON.stringify($text9.val()));
    localStorage.setItem("10AM", JSON.stringify($text10.val()));
    localStorage.setItem("11AM", JSON.stringify($text11.val()));
    localStorage.setItem("12PM", JSON.stringify($text12.val()));
    localStorage.setItem("1PM", JSON.stringify($text13.val()));
    localStorage.setItem("2PM", JSON.stringify($text14.val()));
    localStorage.setItem("3PM", JSON.stringify($text15.val()));
    localStorage.setItem("4PM", JSON.stringify($text16.val()));
    localStorage.setItem("5PM", JSON.stringify($text17.val()));
})

// function loadTimeblock () {
//     $("#9").val(localStorage.getItem("9"));
// }