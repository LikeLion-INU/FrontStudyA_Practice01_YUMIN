const timeMinute = document.getElementById('cnt-minute');
const timeSecond = document.getElementById('cnt-second');
const timeMilli = document.getElementById('cnt-milli');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;

startButton.addEventListener('click', ()=> {
    clearInterval(interval);
    interval = setInterval(setStart, 10);
})

stopButton.addEventListener('click', () => {
    clearInterval(interval);
})

resetButton.addEventListener('click', ()=> {
    clearInterval(interval);

    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    timeMinute.innerText = '00';
    timeSecond.innerText = '00';
    timeMilli.innerText = '00';
})

function setStart() {
    milliSeconds++;

    if (milliSeconds <= 9) {
        timeMilli.innerText = '0' + milliSeconds;
    } else {
        timeMilli.innerText = milliSeconds;
    }

    if (milliSeconds > 99) {
        seconds++;
        milliSeconds = 0;
        timeMilli.innerText = '00';

        if (seconds <= 9) {
            timeSecond.innerText = '0' + seconds;
        } else {
            timeSecond.innerText = seconds;
        }

        if (seconds > 59) {
            minutes++;
            seconds = 0;
            timeSecond.innerText = '00';

            if (minutes <= 9) {
                timeMinute.innerText = '0' + minutes;
            } else {
                timeMinute.innerText = minutes;
            }
        }
    }
}
