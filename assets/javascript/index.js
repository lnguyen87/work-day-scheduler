// var today = new Date();
// var dd = String(today.getDate());
// var mm = String(today.getMonth() + 1)
// var yyyy = today.getFullYear();

// today = mm + "/" + dd + "/" + yyyy;
// console.log(today);

var today = moment().format("LLLL");
$("#currentDay").html(today);