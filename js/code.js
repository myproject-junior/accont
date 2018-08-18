//Checks
$(document).ready(function() {
    if(getCookie("backgroundPosition") !== "" && window.scrollY !== 0) document.getElementById("slide").style.backgroundPosition = getCookie("backgroundPosition");
});
//Eventos
//Evento da HASH
window.addEventListener("hashchange", menuClick);

//Quando der scroll
window.onscroll = function(){
    var background = document.getElementById("slide");
    if(window.scrollY >= document.querySelector(".processoseletivo-section").offsetTop - window.innerHeight + $(".processoseletivo-section").height()){
        background.
    }
};

//Eventos quando o mouse vai para cime ou para baixo
window.addEventListener('wheel', function(e){
    if(e.deltaY < 0){
        backgroundMove.toUp();
    }if(e.deltaY > 0){
        backgroundMove.toBottom();
    }
});

//Quando clicar no menu
function menuClick(){
    let deskButton = document.getElementsByClassName("desk-menu-button");
    for(let i = 0; i < deskButton.length; i++){
        if("#" + deskButton.href == window.location.hash){

        }
    }
}

//classes

//Fazer o background se mover
class backgroundMove{
    static toUp() {
        var element = document.getElementById("slide");
        var positionValue = parseInt(document.getElementById("slide").style.backgroundPosition.substring(3, 6));
        if (positionValue >= 0) element.style.backgroundPosition = "0 " + (positionValue - 1) + "%";
    }

    static toBottom(){
        var element = document.getElementById("slide");
        var positionValue = parseInt(document.getElementById("slide").style.backgroundPosition.substring(3,6));
        if(positionValue < 51) element.style.backgroundPosition = "0 " + (positionValue + 1) + "%";

    }
}


//COOKIES
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}