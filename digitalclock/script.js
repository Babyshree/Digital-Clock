const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const meridiemE1 = document.getElementById("meridiem");

function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let mr="AM";

    if (h>12){
        h=h-12;
        mr="PM";
    }

    h=h < 10 ? "0" + h : h;
    m=m < 10 ? "0" + m : m;
    //if m<10 print 0 + m eg:m=5 ->05
    s=s < 10 ? "0" + s : s;

    hourE1.innerText=h;
    minutesE1.innerText=m;
    secondsE1.innerText=s;
    meridiemE1.innerText=mr;
    setTimeout(()=>{
        updateClock()
    }, 1000)//1 sec= 1000 millisec

}

updateClock();

let container = document.getElementById("container");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning !"
    : timeNow >= 12 && timeNow <= 16
    ? "Good Afternoon !"
    :timeNow >20
    ?"Good Evening !"
    : "Good night !";
container.innerHTML = `<h1>${greeting}</h1>`;



