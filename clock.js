const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");



function getTime() {
    const date= new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `오전 0${hours}` : `${hours>11 ? `오후 ${hours-12}` : "오전 "+hours}`}:${
        minutes<10 ? `0${minutes}` : minutes}:${
            seconds<10 ? `0${seconds}` : seconds}
        `; 
    //삼항연산자를 사용하였다! 만약 seconds가 10보다 작다면 앞에0을 붙히고 그게 아니라면(else) 그냥 보여주기
}
//setInterval()이란 함수는 첫번째 인자로 실행할 함수를 받고, 두번째 인자로 실행하고싶은 시간(ms)로


function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
