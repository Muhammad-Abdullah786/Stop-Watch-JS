let startNode = document.getElementById('Start')
let pauseNode = document.getElementById('Pause')
let resetNode = document.getElementById('Reset')
let timer = document.getElementById('timer')
// let's make a stop watch

let [milliseconds,seconds, minutes, hours] = [0, 0, 0, 0,]
let running = false
startNode.addEventListener('click', startTimer)
// pauseNode.addEventListener('click', pauseTimer)
// resetNode.addEventListener('click', resetTimer)
function startTimer() {
    milliseconds ++;
    if (milliseconds >= 999){
        milliseconds = 0;
        seconds++;
        if (seconds >= 60){
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60){
            minutes = 0;
            hours++;
        }
        if (hours >= 24){
            hours = 0;
        }
        timer.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`
}
}


