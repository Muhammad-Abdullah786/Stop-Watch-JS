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
let running = true
function start(){
    // running = true
    if (running === true ) {
        start()
        milliseconds ++;
        timer.innerText = milliseconds
        setTimeout(start(), 9000)
        // console.log("start" , timer.innerText);
    }
} 


function pause(){
     console.log("pause");
}
function reset(){
    console.log("reset");
}