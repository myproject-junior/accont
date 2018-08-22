//Eventos
//Evento da HASH
window.addEventListener("hashchange", menuClick);

//Quando der scroll
let lastScroll = window.scrollY;
window.onscroll = function(){
    changeSlideScroll();
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

//Quando mudar o slide
let actualBack = 1;
function changeSlideScroll(){
    if(window.scrollY <= elemGetPosition(".solucoes-section", 2) && actualBack !== 1){
        background.change(1);
        actualBack = 1;
    }else if(window.scrollY >= elemGetPosition(".processoseletivo-section", 1) && actualBack !== 2){
        background.change(2);
        actualBack = 2;
    }
}

//Mudar posição do slide
function backPosChange(){
    if(lastScroll > window.scrollY){ // Descendo
        background.toBottom();
    }else if(lastScroll < window.scrollY){ // Subindo
        background.toUp();
    }
    lastScroll = window.scrollY;
}

//Mudar a barra do menu
function menuBarChange(){
    const scrollPos = window.scrollY;
    let menuBtClass = document.getElementsByClassName("desk-menu-button");
    if(scrollPos >= 440){
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
    static toUp() {
        const element = document.getElementById("slide");
        const positionValue = parseInt(document.getElementById("slide").style.backgroundPosition.substring(3, 6));
        if (positionValue >= 0) element.style.backgroundPosition = "0 " + (positionValue - 1) + "%";
    }

    static toBottom(){
        const element = document.getElementById("slide");
        const positionValue = parseInt(document.getElementById("slide").style.backgroundPosition.substring(3, 6));
        if(positionValue < 51) element.style.backgroundPosition = "0 " + (positionValue + 1) + "%";
    }

    static change(id){
        let background = document.getElementById("slide");
        background.setAttribute("class", "slide slide" + id);
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