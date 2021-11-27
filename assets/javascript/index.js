// var today = new Date();
// var dd = String(today.getDate());
// var mm = String(today.getMonth() + 1)
// var yyyy = today.getFullYear();

// today = mm + "/" + dd + "/" + yyyy;
// console.log(today);

var workDay = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(workDay);

// Get date and time from moment.js and display when page loads
var today = moment().format("LLLL");
$("#currentDay").html(today);


function currentTimeTracker() {
    var currentTime = moment().format("HH");
    console.log(currentTime);
    var textArea = $("textarea");
        
    // check if current time is passed 9am-5pm
    for (var i = 0; i < workDay.length; i++) {
        if (currentTime > workDay[i]) {
            $("#9am").addClass("past");
        }
    }
};

