let startNode = document.getElementById('Start')
let pauseNode = document.getElementById('Pause')
let resetNode = document.getElementById('Reset')
let timer = document.getElementById('timer')
// let's make a stop watch

let [milliseconds,seconds, minutes, hours] = [0, 0, 0, 0,]
let running = false

function start(){
    console.log("start");
    if (running === true) {
        return
    }
    start()
} 


function pause(){
     console.log("pause");
}
function reset(){
    console.log("reset");
}