var currentTime = moment().format("HH");
console.log(currentTime);

var workDay = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(workDay);

// Get date and time from moment.js and display when page loads
var today = moment().format("LLLL");
$("#currentDay").html(today);


function currentTimeTracker() {
    // // check if current time is passed 9am-5pm
    // for (var i = 0; i < workDay.length; i++) {
        if (currentTime > workDay[0]) {
            $("#9am").addClass("past");
            console.log(currentTime);
            console.log(workDay[0]);
        } else if (currentTime === workDay[0]) {
            $("#9am").addClass("present");
        } else {
            $("#9am").addClass("future");
        }
    };
    
currentTimeTracker();

