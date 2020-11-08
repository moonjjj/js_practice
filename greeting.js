const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS="currentUser";
const SHOWING_CN="showing"; //showing이라는 클래스를 classList.add로 가져올 것이다 (.showing에 대한 css가 이미 적혀있음)

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handlerSubmit(e){
    e.preventDefault(); //event의 기본적인 속성을 바꾼다.
    const currentValue = input.value;
    console.log(currentValue);
    paingGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handlerSubmit);
}

function paingGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); //localstorage(서버)에 userls를 가져와서 currentuser에 담는다

    if(currentUser === null){
        askForName();
    } else{
        paingGreeting(currentUser); //currentuser의 value값을 매개변수로 가져감.
    }
}

function init(){
 loadName();
}

init();
//init() -> loadname() -> 로컬스토리지에서 user_ls(사용자 이름)을 가져와서 없다면 go askforname 있다면 paingGreeting(사용자이름을 매개변수로 가져감)이동
//없을시-> askforname() 숨겨놨던 form태그를 보이게 만들고, submit enent를 추가한다.->서브밋(엔터)를 할 경우에 
//있을시-> paingGreeting(사용자이름)!