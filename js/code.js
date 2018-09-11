//Eventos
//Evento da HASH
window.addEventListener("hashchange", menuClick);

//Quando der scroll
let lastScroll = window.scrollY;
window.onscroll = function(){
    backPosChange();
    menuBarChange();
};

//Quando clicar no menu
function menuClick(){
    let deskButton = document.getElementsByClassName("desk-menu-button");
    for(let i = 0; i < deskButton.length; i++){
        if("#" + deskButton.href === window.location.hash){

        }
    }
}

//Mudar posição do slide
function backPosChange(){
    background.newPosition();
}

//Mudar a barra do menu
function menuBarChange(){
    const scrollPos = window.scrollY;
    let menuBtClass = document.getElementsByClassName("desk-menu-button");
    if(scrollPos >= 50){
        document.querySelector("header").classList.add("menuScrolled");
        for(let i = 0; i < menuBtClass.length; i++) menuBtClass[i].classList.add("desk-menu-button-scrolled");
    }else{
        document.querySelector("header").classList.remove("menuScrolled");
        for(let i = 0; i < menuBtClass.length; i++) menuBtClass[i].classList.remove("desk-menu-button-scrolled");
    }
}

/*Checar posição do elemento*/
function elemGetPosition(element, orientation){
    const elem = document.querySelector(element);
    if(orientation === 1){
        return elem.offsetTop - window.innerHeight + $(element).height();
    }else if(orientation === 2){
        return elem.offsetTop;
    }
}

/*
classes

Fazer o background se mover
*/
class background{
    static newPosition(){
        const element = document.getElementById("slide");
        const totalHeight = document.body.scrollHeight;
        element.style.backgroundPosition = "0 " + parseInt(window.scrollY/totalHeight*100) + "%";
    }
}


//COOKIES
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if((window.orientation == 90) || (window.orientation == -90)){
    let y = document.getElementsByClassName("clube");
    for (let k = 0; k < y.length; k++) if(y[k].textContent = "FOR") [k].innerHTML = "Fortaleza";
}