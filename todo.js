const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const sayHi=document.createElement("p");
const sayHiP=toDoForm.appendChild(sayHi);

const TODOS_LS='toDos';

function filterFn(toDo){
    return toDo.id === 1;
}

let toDos = []; //배열에 저장

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    }); //filter로 모든 array를 검사하고 true인 것들만 뽑아줌
    toDos = cleanToDos;
    saveToDos(); //savetodos 함수실헹(로컬에 저장)
}

function saveToDos(){ //로컬스트리지에 저장한다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //로컬스트리지는 스트링으로 밖에 저장이 안 되기 때문에 
    //JSON.STRINGIFY(TODOS)라는 작업으로 객체를 스트링화 시켜야함.
}

function paintToDo(text){ //text = currentvalue = input에 저장된 값 //적은 값을 엘리멘트를 생성하여 가시화시킨다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const search = document.createElement("a");
    const newId = toDos.length + 1;
    // const reb = window.open(`https://search.naver.com/search.naver?where=image&sm=tab_jum&query=${text}`,"PopupWin", "width=500,height=600");
    delBtn.addEventListener('click',deleteToDo);
    delBtn.innerHTML="❌";
    search.setAttribute('href',`https://map.naver.com/v5/search/${text}`);
    search.innerHTML=`${text}맛집찾기`;
    search.classList.add('searchA');
    
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(search);
    li.appendChild(delBtn); //LI요소 안에 추가한다. BTN과 SPAN을
    li.id = newId;
    toDoList.appendChild(li); //TODOLIST안에 추가 LI를

    const toDoObj = {
        text: text,
        id: toDos.length + 1 //ID는 INDEX+1(즉 1부터 시작)
    };
    toDos.push(toDoObj); //ARRAY안에 ELEMENT를 하나 추가
    saveToDos();
}

function handlerSubmit(e){ //인풋에 값을 가져오고 painttodo를 실행시킨다.
    e.preventDefault(); //event의 default를 막아준다.
    const currentValue = toDoInput.value;
    paintToDo(currentValue); //paintToDo함수에 인풋에 적은 내용을 가져간다.
    toDoInput.value=""; //초기화 시켜줌 안시켜주면 전에 입력하던게 남아있음.
}

function something(toDo){
    paintToDo(toDo.text); //toDo객체의 text를 빼내준다.
};

function loadToDos(){ //todo리스트를 가져와서 값이 있다면 foreach문을 이용해서 다 출력한다
    const loadedToDos = localStorage.getItem(TODOS_LS); 
    if(loadedToDos!== null){
       const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(something); //배열을 FOREACH를 이용하여 출력
    }
}


function sayHello(){
    const date = new Date();
    const hour = date.getHours();
    if(hour>=5 && hour<=11){ // 새벽5시~아침11시 아침
        console.log('say goodmorning');
        
    }
    else if(hour>=12 && hour<=17){ //낮12시~낮5시 낮
        console.log('say goodafternoon');
        //form안에 새로운 엘리멘트 만들기
        const afternoon=document.createTextNode('hello~~');
        sayHiP.prepend(afternoon);
    }
    else if(hour>=0 && hour<5){ //밤0시~새벽5시 밤
        console.log('say goodnight');
    }
    else{ //낮 5시~12시 저녁
        console.log('say goodevening');
    }
}


function init(){
    sayHello();
    loadToDos();
    toDoForm.addEventListener("submit", handlerSubmit);
}

init();

//todo.js의 순서도
//init function으로 loadToDos를 가져온다, todoform에 handlersubmit function(input의 값을 가져온다)