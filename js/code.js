const sectionsId = ["slider", "solucoes", "processo-seletivo", "blog", "quemsomos"]

//Eventos
//Evento de hash
window.addEventListener("hashchange", menuClick);
window.addEventListener("scroll", scrolling);


$(document ).ready(function(){
    //Qdo clicar no botão de participar
    document.getElementById("processoseletivo-button").addEventListener("click", participarClick);
    document.getElementById("processoseletivo-seta").addEventListener("click", participarClickDisable);
});

//Quando der scroll
window.onscroll = function(){
    backPosChange();
    menuBarChange();
};

//Quando clicar no menu
function menuClick() {
    let dScroll = document.getElementsByClassName("menuScrolled")[0] || document.querySelector("header");
    window.scrollTo(0, document.getElementById(window.location.hash.replace("#!", "")).getBoundingClientRect().top + window.scrollY - dScroll.offsetHeight);
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

//Quando der scroll
function scrolling(){
    let id;
    for(id = 0; id  < sectionsId.length ; id++){
        if(id < sectionsId.length-1) {
            if ((window.scrollY+1) >= getLocation(id) && window.scrollY <= getLocation(id + 1)) {
                if (document.getElementsByClassName("desk-menu-button-activated").length > 0)
                    document.getElementsByClassName("desk-menu-button-activated")[0].classList.remove("desk-menu-button-activated");
                document.getElementById(sectionsId[id] + "-bt").classList.add("desk-menu-button-activated");
            }
        }else if(window.scrollY >= getLocation(sectionsId.length-1)){
            if(document.getElementsByClassName("desk-menu-button-activated").length > 0)
                document.getElementsByClassName("desk-menu-button-activated")[0].classList.remove("desk-menu-button-activated");
            document.getElementById(sectionsId[(sectionsId.length-1)] + "-bt").classList.add("desk-menu-button-activated");
        }
    }
}

function getLocation(id){
    return document.getElementById(sectionsId[id]).getBoundingClientRect().top + window.scrollY - document.getElementsByClassName("desk-menu-div")[0].offsetHeight;
}

//Quando clicar no botão de participar
function participarClick(){
    document.getElementById("processoseletivo-form").classList.add("processoseletivo-form-activated");
    document.getElementById("processoseletivo-seta").classList.remove("processoseletivo-setacima-disabled");
}

function participarClickDisable(){
    document.getElementById("processoseletivo-form").classList.remove("processoseletivo-form-activated");
    document.getElementById("processoseletivo-seta").classList.add("processoseletivo-setacima-disabled");
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
if (typeof window.orientation !== 'undefined' && window.innerWidth > 600){
    $(document).ready(function () {
        $('.parceiros-section').slick({
            autoplay: true,
            autoplaySpeed: 10000,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            centerMode: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"> < </button>',
            nextArrow: '<button type="button" class="slick-next"> > </button>'
        });
    });
}else{
    $(document).ready(function () {
        $('.parceiros-section').slick({
            autoplay: true,
            autoplaySpeed: 10000,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
            centerMode: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"> < </button>',
            nextArrow: '<button type="button" class="slick-next"> > </button>'
        });
    });
}
