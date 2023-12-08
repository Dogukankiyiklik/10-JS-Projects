const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = new Date("January 1, 24 00:00:00");

function countdown(){
    const currentTime = new Date();
    const totalMilisecond = newYear.getTime() - currentTime.getTime();

    let totalSeconds = Math.floor(totalMilisecond / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);
    let totalDays = Math.floor(totalHours / 24);

    totalSeconds % 60 < 10 ? seconds.innerHTML = "0" + totalSeconds % 60: seconds.innerHTML = totalSeconds % 60;
    totalMinutes % 60 < 10 ? mins.innerHTML = "0" + totalMinutes % 60 + " :" : mins.innerHTML = totalMinutes % 60 + " :";  
    totalHours % 24 < 10 ? hours.innerHTML = "0" + totalHours % 24 + " :" : hours.innerHTML = totalHours % 24 + " :"; 
    totalDays < 10 ? days.innerHTML = "0" + totalDays + " :" : days.innerHTML = totalDays + " :"; 
}

// initial call
countdown();
setInterval(countdown, 1000);