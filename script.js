let nowday = new Date()
const days=["sunday","monday","tuesday","wenseday","thursday","friday","saturday"]
document.getElementById('day').innerHTML = days[nowday.getUTCDay()];
function getTime(){
    let nowTime =new Date();
    document.getElementById("hour").innerHTML = nowTime.getUTCHours()
    document.getElementById("min").innerHTML =nowTime.getUTCMinutes()
    document.getElementById("sec").innerHTML = nowTime.getUTCSeconds()
}
getTime()