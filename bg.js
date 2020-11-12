const body = document.querySelector("body");

const IMG_NUMBER =6;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
    image.addEventListener("loaded", handleImgLoad);

}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomnumber = genRandom();
        paintImage(randomnumber);
}

init();