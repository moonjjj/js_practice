const body = document.querySelector("body");

const IMG_NUMBER =6;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
    image.addEventListener("loaded", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER+1);
    return number;
}

function init(){
    const randomnumber = genRandom();
    paintImage(randomnumber);
    // setTimeout('location.reload()',3000)
}

init();