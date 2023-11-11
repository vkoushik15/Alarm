function updatetime(){
    const now = new Date()
    
   // const ISTOFF = 540
  //  now.setMinutes(now.getMinutes()-ISTOFF+540)
    const hour = now.getHours().toString()
    const min = now.getMinutes().toString()
    const sec = now.getSeconds().toString()
  
    const times = `${hour}:${min}:${sec}`

document.getElementById('time').textContent = times
}
function start(){

updatetime()
setInterval(updatetime,1000)
    
}
start()
document.addEventListener("DOMContentLoaded", function () {
const hourcont = document.getElementById('hourcont')
const mincont = document.getElementById('mincont')
const create = document.getElementById('b1')
const clears = document.getElementById('b2')
const sound = document.getElementById('alarm-sound')
const hourDisplay = document.getElementById("hour")
const minuteDisplay = document.getElementById("minute")
const secondDisplay =document.getElementById('second')

for (let i = 0; i <= 24; i++) {
    hourcont.options.add(new Option(i.toString(), i));
}
for (let i = 0; i <= 59; i++) {
    mincont.options.add(new Option(i.toString(), i));
}
create.addEventListener("click", function(){
const hrv = parseInt(hourcont.value)
const mrv = parseInt(mincont.value)
let present = new Date()
const alarmtime = new Date(present.getFullYear(), present.getMonth(), present.getDate(), hrv, mrv, 0)
const diff = alarmtime-present
if(diff<=0){
    alert("please select a future time")
    return
}
else{
alarminterval = setInterval(function(){
const currentTime = new Date()
const remainingTime = alarmtime-currentTime
if(remainingTime<=0){
    sound.play()
}
else{
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
if(hours<10){
hourDisplay.textContent =  `0${hours}`

}
else if(hours>=10){
    hourDisplay.textContent = hours
}
if(minutes<10){
    minuteDisplay.textContent =`0${minutes}`
}
else if (minutes>=10){
    minuteDisplay.textContent = minutes
}
if(seconds<10){
    secondDisplay.textContent = `${seconds}`
}

else if(seconds>=10){
secondDisplay.textContent = seconds
}
}

},1000)
}
})


clears.addEventListener("click",function(){
    clearInterval(alarminterval)
    sound.pause()
    hourDisplay.textContent = "00 "
    minuteDisplay.textContent = "00 "
    secondDisplay.textContent ="00"
       
    })
    


})




 