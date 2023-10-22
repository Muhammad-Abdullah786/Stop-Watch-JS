let startNode = document.getElementById('Start')
let pauseNode = document.getElementById('Pause')
let resetNode = document.getElementById('Reset')
let timer = document.getElementById('timer')
// let's make a stop watch

// setinterval 
// it callback your function in the given time
// setInterval(()=>{
//     console.log("executed");
// },100)

let [milliseconds,seconds, minutes, hours] = [0, 0, 0, 0,]
let running = false
function start(){
    if (!running) {
        running = true
        setInterval(startStopWatch,100)
    }
} 
function startStopWatch(){
    if(running){
        milliseconds++;

    }
    if (milliseconds === 10) {
        milliseconds = 0
        seconds++;
        
        if (seconds === 60) {
            seconds =0
            hours++
            
        }
    }
    
    timer.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function pause(){
     console.log("pause");
}
function reset(){
    console.log("reset");
}