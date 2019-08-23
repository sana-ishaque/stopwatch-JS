let timer;
let seconds = 0;
let minutes = 00;
let hours = 0;
let stopWatch;
let isRunning = false;
let disp = document.querySelector('#timer');

// STOPWATCH FUNCTION

let start = () => {
    if (seconds < 59) {
        seconds++;
    } else if (seconds == 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 59) {
        minutes = 0;
        hours++;
    }
    display();
    isRunning = true;

}
// CHANGING INNRERHTML
let display = () => {
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    // if (minutes < 10) {
    //     minutes = '0' + minutes ;
    // }
    // if (hours <10){
    //     hours = '00';
    // }
    disp.innerHTML = hours + ':' + minutes + ':' + seconds;
}


// START BUTTON
let startBtn = document.querySelector('.start');
startBtn.addEventListener("click", function () {
    if (isRunning === false) {
        stopWatch = setInterval(start, 1000);
    }
});


// STOP BUTTON
let stopBtn = document.querySelector('.stop');
stopBtn.addEventListener("click", function () {
    isRunning = false;
    timer = clearInterval(stopWatch);
})


// RESTART BUTTON
let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener("click", function(){
    timer = clearInterval(stopWatch);
    hours =0;
    minutes = 0;
    seconds = 0;
    disp.innerHTML = `00 : 00 : 00`;
    isRunning = false;
});


