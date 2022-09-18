var time  = moment().format('[Today is:] dddd[,] MMMM Do');
$("#currentDay").text(time);

function saveEvent() {
    event.preventDefault();
    var saveAppointment = document.getElementById("nine-am").value;
    localStorage.setItem('saved-nine-am',saveAppointment);
    console.log(saveAppointment);
}

var pastAppointment = localStorage.getItem("saved-nine-am")
// $("#nine-am").text(HI);
document.getElementById("nine-am").value = pastAppointment;