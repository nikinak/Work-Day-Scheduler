var nineTime = document.getElementById('nine-am');
var tenTime = document.getElementById('ten-am');
var elevenTime = document.getElementById('eleven-am');
var twelveTime = document.getElementById('twelve-pm');
var oneTime = document.getElementById('one-pm');
var twoTime = document.getElementById('two-pm');
var threeTime = document.getElementById('three-pm');
var fourTime = document.getElementById('four-pm');
var fiveTime = document.getElementById('five-pm');
var sixTime = document.getElementById('six-pm');

var time  = moment().format('[Today is:] dddd[,] MMMM Do');
var currentTime = new Date().getHours();

$("#currentDay").text(time);

function saveEventNine() {
    event.preventDefault();
    var saveAppointment = document.getElementById("nine-am").value;
    localStorage.setItem('saved-nine-am',saveAppointment);
    console.log(saveAppointment);
}

function saveEventTen() {
    event.preventDefault();
    var saveAppointment = document.getElementById("ten-am").value;
    localStorage.setItem('saved-ten-am',saveAppointment);
    console.log(saveAppointment);
}

var pastAppointmentNine = localStorage.getItem("saved-nine-am")
document.getElementById("nine-am").value = pastAppointmentNine;

var pastAppointmentTen = localStorage.getItem("saved-ten-am")
document.getElementById("ten-am").value = pastAppointmentTen;

console.log(currentTime);

function executeAt(time, func){
    setTimeout(func, time-currentTime);
    return true;
}

$(document).ready(function() {
    executeAt(new Date().setTime(new Date().getHours()+2000), function(){
        console.log(currentTime);
        
        if(currentTime < 9){
            nineTime.classList.add('future');
            tenTime.classList.add('future');
            elevenTime.classList.add('future');
            twelveTime.classList.add('future');
            oneTime.classList.add('future');
            twoTime.classList.add('future');
            threeTime.classList.add('future');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 9){
            nineTime.classList.add('present');
            tenTime.classList.add('future');
            elevenTime.classList.add('future');
            twelveTime.classList.add('future');
            oneTime.classList.add('future');
            twoTime.classList.add('future');
            threeTime.classList.add('future');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 10){
            nineTime.classList.add('past');
            tenTime.classList.add('present');
            elevenTime.classList.add('future');
            twelveTime.classList.add('future');
            oneTime.classList.add('future');
            twoTime.classList.add('future');
            threeTime.classList.add('future');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 11){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('present');
            twelveTime.classList.add('future');
            oneTime.classList.add('future');
            twoTime.classList.add('future');
            threeTime.classList.add('future');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 12){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('present');
            oneTime.classList.add('future');
            twoTime.classList.add('future');
            threeTime.classList.add('future');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 13){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('past');
            oneTime.classList.add('present');
            twoTime.classList.add('future');
            threeTime.classList.add('future');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 14){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('past');
            oneTime.classList.add('past');
            twoTime.classList.add('present');
            threeTime.classList.add('future');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 15){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('past');
            oneTime.classList.add('past');
            twoTime.classList.add('past');
            threeTime.classList.add('present');
            fourTime.classList.add('future');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 16){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('past');
            oneTime.classList.add('past');
            twoTime.classList.add('past');
            threeTime.classList.add('past');
            fourTime.classList.add('present');
            fiveTime.classList.add('future');
            sixTime.classList.add('future');
        }

        if(currentTime === 17){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('past');
            oneTime.classList.add('past');
            twoTime.classList.add('past');
            threeTime.classList.add('past');
            fourTime.classList.add('past');
            fiveTime.classList.add('present');
            sixTime.classList.add('future');
        }

        if(currentTime === 18){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('past');
            oneTime.classList.add('past');
            twoTime.classList.add('past');
            threeTime.classList.add('past');
            fourTime.classList.add('past');
            fiveTime.classList.add('past');
            sixTime.classList.add('present');
        }

        if(currentTime > 18){
            nineTime.classList.add('past');
            tenTime.classList.add('past');
            elevenTime.classList.add('past');
            twelveTime.classList.add('past');
            oneTime.classList.add('past');
            twoTime.classList.add('past');
            threeTime.classList.add('past');
            fourTime.classList.add('past');
            fiveTime.classList.add('past');
            sixTime.classList.add('past');
        }
        });
});

